export interface Item {
  itemId: [string];
  title: [string];
  globalId: [string];
  primaryCategory: [{ categoryId: [string]; categoryName: [string] }];
  galleryURL?: [string];
  viewItemURL: [string];
  paymentMethod: [string];
  autoPay: [string];
  location: [string];
  country: [string];
  sellingStatus: [
    {
      currentPrice: [{ "@currencyId": string; __value__: string }];
      convertedCurrentPrice: [{ "@currencyId": string; __value__: string }];
      sellingState: [string];
      timeLeft: [string];
    }
  ];
  condition?: [{ conditionDisplayName: [string] }];
}

export interface ResponseAPI {
  findItemsByKeywordsResponse: [
    {
      searchResult?: [
        {
          "@count": string;
          item?: Item[];
        }
      ];
      paginationOutput: [
        {
          pageNumber: [string];
          entriesPerPage: [string];
          totalPages: [string];
          totalEntries: [string];
        }
      ];
    }
  ];
}

/*  const sampleResponse = {
  findItemsByKeywordsResponse: [
    {
      searchResult: [
        {
          "@count": "3",
          item: [
            {
              itemId: ["110533026011"],
              title: [
                "Wireless USB3.0 Dual Band WiFi Adapter 802.11ac Network mini USB Card Mac Window",
              ],
              globalId: ["EBAY-US"],
              primaryCategory: [
                { categoryId: ["20318"], categoryName: ["Network Cards"] },
              ],
              galleryURL: [
                "https://thumbs4.sandbox.ebaystatic.com/pict/1105330260114040_0.jpg",
              ],
              viewItemURL: [
                "https://cgi.sandbox.ebay.com/Wireless-USB3-0-Dual-Band-WiFi-Adapter-802-11ac-Network-mini-USB-Card-Mac-Window-/110533026011",
              ],
              paymentMethod: ["PayPal"],
              autoPay: ["false"],
              location: ["China"],
              country: ["CN"],
              sellingStatus: [
                {
                  currentPrice: [{ "@currencyId": "USD", __value__: "12.99" }],
                  convertedCurrentPrice: [
                    { "@currencyId": "USD", __value__: "12.99" },
                  ],
                  sellingState: ["Active"],
                  timeLeft: ["P27DT17H1M24S"],
                },
              ],
              condition: [
                { conditionId: ["1000"], conditionDisplayName: ["New"] },
              ],
            },
          ],
        },
      ],
      paginationOutput: [
        {
          pageNumber: ["1"],
          entriesPerPage: ["100"],
          totalPages: ["1"],
          totalEntries: ["4"],
        },
      ],
      itemSearchURL: [
        "https://shop.sandbox.ebay.com/i.html?_nkw=mac&_ddo=1&_ipg=100&_pgn=1",
      ],
    },
  ],
}; */
