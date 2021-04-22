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
