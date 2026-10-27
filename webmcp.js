
/*
 * WebMCP for Kitchen Essentials
 * Read-only product search.
 * Does not change cart or WhatsApp ordering.
 */
(function () {
  "use strict";

  function getProducts(query) {
    const term = String(query || "").trim().toLowerCase();

    return Array.from(document.querySelectorAll(".product"))
      .map(function (card) {
        const name = card.querySelector(".product-info h3");
        const description = card.querySelector(".product-info p");
        const price = card.querySelector(".product-info .price");

        return {
          name: name ? name.textContent.trim() : "",
          description: description ? description.textContent.trim() : "",
          price: price ? price.textContent.trim().replace(/\s+/g, " ") : ""
        };
      })
      .filter(function (product) {
        if (!product.name) return false;

        return !term ||
          (product.name + " " + product.description + " " + product.price)
            .toLowerCase().includes(term);
      })
      .slice(0, 30);
  }

  function makeResult(data) {
    return {
      content: [{
        type: "text",
        text: JSON.stringify(data)
      }]
    };
  }

  function registerTools() {
    if (!document.modelContext ||
        typeof document.modelContext.registerTool !== "function") {
      console.info(
        "WebMCP is unavailable in this browser. The website still works normally."
      );
      return;
    }

    document.modelContext.registerTool({
      name: "list-products",
      description:
        "List Kitchen Essentials products and their displayed prices. Does not place orders.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      },
      execute: function () {
        return makeResult({ products: getProducts("") });
      }
    });

    document.modelContext.registerTool({
      name: "search-products",
      description:
        "Search Kitchen Essentials products by name, description, or displayed price. Does not change the cart or place orders.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "The product name or keyword to search for."
          }
        },
        required: ["query"],
        additionalProperties: false
      },
      execute: function (input) {
        const query =
          input && typeof input.query === "string" ? input.query : "";

        return makeResult({
          query: query,
          products: getProducts(query)
        });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", registerTools, {
      once: true
    });
  } else {
    registerTools();
  }
})();
