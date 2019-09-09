import { Taxonomies } from "models/Taxonomies";

function getTaxonomies(storeId: number): Promise<Taxonomies> {
  const data: Taxonomies = {
    restaurantId: 1,
    restaurantName: "Ganga Vegetarian restaurant",
    categories: [
      {
        label: "Sunday Buffet Brunch",
        id: 0,
        disabled: false,
        items: [
          {
            id: 0,
            price: "35.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Buffet Take Away"
          }
        ]
      },
      {
        label: "Roti Chanai",
        id: 1,
        disabled: false,
        items: [
          {
            id: 0,
            price: "3.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Roti Chanai"
          },
          {
            id: 1,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Roti Bom"
          },
          {
            id: 2,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Roti Planta"
          },
          {
            id: 3,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Roti Onion"
          },
          {
            id: 4,
            price: "7.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Roti Cheese"
          },
          {
            id: 5,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Roti Murtabak"
          }
        ]
      },
      {
        label: "Naan",
        id: 2,
        disabled: false,
        items: [
          {
            id: 0,
            price: "6.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Plain Naan"
          },
          {
            id: 1,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Onion Naan"
          },
          {
            id: 2,
            price: "13.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Kashmiri Naan"
          },
          {
            id: 3,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Garlic Naan"
          },
          {
            id: 4,
            price: "9.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Cheese Naan"
          },
          {
            id: 5,
            price: "13.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Cheese Plus Garlic Naan"
          },
          {
            id: 6,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Butter Naan"
          },
          {
            id: 7,
            price: "9.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Mint Naan"
          },
          {
            id: 8,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Tandoori Roti Naan"
          },
          {
            id: 9,
            price: "6.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Tandoori Butter Roti Naan"
          }
        ]
      },
      {
        label: "Paratha",
        id: 3,
        disabled: false,
        items: [
          {
            id: 0,
            price: "5.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Plain Paratha"
          },
          {
            id: 1,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Paneer Paratha"
          },
          {
            id: 2,
            price: "10.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Onion Paratha"
          },
          {
            id: 3,
            price: "12.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Mixed Vege Paratha"
          },
          {
            id: 4,
            price: "10.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Aloo Paratha"
          }
        ]
      },
      {
        label: "Thosai",
        id: 4,
        disabled: false,
        items: [
          {
            id: 0,
            price: "3.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Vittu Thosai"
          },
          {
            id: 1,
            price: "3.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Plain Thosai"
          },
          {
            id: 2,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Onion Thosai"
          },
          {
            id: 3,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Ghee Thosai"
          },
          {
            id: 4,
            price: "5.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Masala Thosai"
          },
          {
            id: 5,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Rava Thosai"
          },
          {
            id: 6,
            price: "5.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Rava Masala Thosai"
          },
          {
            id: 7,
            price: "5.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Rava Onion Thosai"
          }
        ]
      },
      {
        label: "Chaat",
        id: 5,
        disabled: false,
        items: [
          {
            id: 0,
            price: "12.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Meeta's Special Chaat"
          },
          {
            id: 1,
            price: "13.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Ganga Aloo Chaat"
          },
          {
            id: 2,
            price: "11.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Samosa Chaat"
          },
          {
            id: 3,
            price: "14.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Samosa Chole Chaat"
          },
          {
            id: 4,
            price: "11.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Chola Tikki Chaat"
          },
          {
            id: 5,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Pani Poori"
          },
          {
            id: 6,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Dahi Potato Poori"
          },
          {
            id: 7,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Sev Potato Poori"
          }
        ]
      },
      {
        label: "Others",
        id: 6,
        disabled: false,
        items: [
          {
            id: 0,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Uppama"
          },
          {
            id: 1,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Vege Uttapam"
          },
          {
            id: 2,
            price: "10.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Vege Uttapam Cheese"
          }
        ]
      },
      {
        label: "Goreng",
        id: 7,
        disabled: false,
        items: [
          {
            id: 0,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Mee Goreng"
          },
          {
            id: 1,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Kwey Teow Goreng"
          },
          {
            id: 2,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Maggi Goreng"
          },
          {
            id: 3,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Nasi Goreng"
          }
        ]
      },
      {
        label: "Rice",
        id: 8,
        disabled: false,
        items: [
          {
            id: 0,
            price: "20.20",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Vegetable Briyani Rice"
          },
          {
            id: 1,
            price: "25.60",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Hyderabad Dum Briyani"
          },
          {
            id: 2,
            price: "15.60",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Vegetable Pulao"
          },
          {
            id: 3,
            price: "7.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Ganga Nasi Lemak"
          },
          {
            id: 4,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Basmati Rice"
          },
          {
            id: 5,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Jeera Rice"
          }
        ]
      },
      {
        label: "Thali",
        id: 9,
        disabled: false,
        items: [
          {
            id: 0,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Ganga Standard Thali"
          }
        ]
      },
      {
        label: "Dhal",
        id: 10,
        disabled: false,
        items: [
          {
            id: 0,
            price: "17.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Dhal Makhani"
          },
          {
            id: 1,
            price: "14.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Dhal Thadka"
          }
        ]
      },
      {
        label: "North Indian Dishes",
        id: 11,
        disabled: false,
        items: [
          {
            id: 0,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Plain Palak"
          },
          {
            id: 1,
            price: "21.60",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Palak Paneer"
          },
          {
            id: 2,
            price: "28.30",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Paneer Bhurji"
          },
          {
            id: 3,
            price: "28.30",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Paneer Tikka Masala"
          },
          {
            id: 4,
            price: "24.30",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Paneer Butter Masala"
          },
          {
            id: 5,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Chana Masala"
          },
          {
            id: 6,
            price: "17.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Bhindi Masala"
          },
          {
            id: 7,
            price: "17.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Mushroom Matar Curry"
          },
          {
            id: 8,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Aloo Matar Curry"
          },
          {
            id: 9,
            price: "22.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Mixed Vege"
          },
          {
            id: 10,
            price: "16.20",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Bombay Aloo"
          },
          {
            id: 11,
            price: "18.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Aloo Gobi"
          },
          {
            id: 12,
            price: "18.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Aloo Palak"
          },
          {
            id: 13,
            price: "18.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Baingan Ka Bharta"
          },
          {
            id: 14,
            price: "22.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Methi Malai Matar"
          },
          {
            id: 15,
            price: "31.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Vegetable Kofta"
          }
        ]
      },
      {
        label: "Sides",
        id: 12,
        disabled: false,
        items: [
          {
            id: 0,
            price: "6.70",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Veg Chicken"
          },
          {
            id: 1,
            price: "6.70",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Veg Mutton"
          },
          {
            id: 2,
            price: "6.70",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Veg Fish"
          }
        ]
      },
      {
        label: "Snacks",
        id: 13,
        disabled: false,
        items: [
          {
            id: 0,
            price: "14.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Chana Bhatura"
          },
          {
            id: 1,
            price: "9.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Puri Set"
          },
          {
            id: 2,
            price: "8.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Samosa Set"
          },
          {
            id: 3,
            price: "12.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Pav Bhaji"
          },
          {
            id: 4,
            price: "10.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Hara Bhara Kebab"
          }
        ]
      },
      {
        label: "Beverages",
        id: 14,
        disabled: false,
        items: [
          {
            id: 0,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Pranic Juice"
          },
          {
            id: 1,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            title: "Caribbean Cooler"
          }
        ]
      }
    ]
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}

export const MenuBoardServices = {
  getTaxonomies
};
