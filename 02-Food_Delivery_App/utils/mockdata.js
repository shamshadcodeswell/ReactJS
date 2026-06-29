// Simplified static menu data — shaped like Swiggy's real API response
// so your existing paths (info, categories, itemCards) keep working.

const MOCK_RES = {
  data: {
    cards: [
      // index 0 and 1 are usually banners/breadcrumbs in real Swiggy data
      {},
      {},
      // index 2 — restaurant info card
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "854804",
              name: "Spice Garden",
              avgRating: "4.3",
              cuisines: ["North Indian", "Chinese", "Biryani"],
              areaName: "Park Street",
              costForTwoMessage: "₹400 for two",
              sla: { deliveryTime: 32 },
            },
          },
        },
      },
      // menu card group
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                // a banner card that is NOT an ItemCategory (gets filtered out)
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel",
                    },
                  },
                },
                // CATEGORY 1 — Recommended
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "1",
                              name: "Butter Chicken",
                              price: 29900, // paise → ₹299
                              description:
                                "Tender chicken in a rich, creamy tomato gravy.",
                              imageId: "Mishti/merchant/dish1.jpg",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "2",
                              name: "Paneer Tikka",
                              price: 24900,
                              description:
                                "Char-grilled cottage cheese with spices.",
                              imageId: "Mishti/merchant/dish2.jpg",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "3",
                              name: "Chicken Biryani",
                              price: 27900,
                              description:
                                "Fragrant basmati rice layered with spiced chicken.",
                              imageId: "Mishti/merchant/dish3.jpg",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                // CATEGORY 2 — Starters
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Starters",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "4",
                              name: "Veg Spring Rolls",
                              price: 17900,
                              description:
                                "Crispy rolls stuffed with seasoned vegetables.",
                              imageId: "Mishti/merchant/dish4.jpg",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "5",
                              name: "Chicken 65",
                              price: 22900,
                              description:
                                "Spicy deep-fried chicken, South Indian style.",
                              imageId: "Mishti/merchant/dish5.jpg",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                // CATEGORY 3 — Desserts
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Desserts",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "6",
                              name: "Gulab Jamun",
                              price: 9900,
                              description:
                                "Soft milk dumplings soaked in sugar syrup.",
                              imageId: "Mishti/merchant/dish6.jpg",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "7",
                              name: "Gajar Ka Halwa",
                              price: 12900,
                              description:
                                "Slow-cooked carrot pudding with nuts.",
                              imageId: "Mishti/merchant/dish7.jpg",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export default MOCK_RES;
