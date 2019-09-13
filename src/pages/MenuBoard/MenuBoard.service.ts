import { Taxonomies } from "models/Taxonomies";

function getTaxonomies(storeId: number): Promise<Taxonomies> {
  const data: Taxonomies = {
    menu: [
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
            label: "Buffet Take Away"
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
            label: "Roti Chanai"
          },
          {
            id: 1,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Roti Bom"
          },
          {
            id: 2,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Roti Planta"
          },
          {
            id: 3,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Roti Onion"
          },
          {
            id: 4,
            price: "7.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Roti Cheese"
          },
          {
            id: 5,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Roti Murtabak"
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
            label: "Plain Naan"
          },
          {
            id: 1,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Onion Naan"
          },
          {
            id: 2,
            price: "13.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Kashmiri Naan"
          },
          {
            id: 3,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Garlic Naan"
          },
          {
            id: 4,
            price: "9.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Cheese Naan"
          },
          {
            id: 5,
            price: "13.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Cheese Plus Garlic Naan"
          },
          {
            id: 6,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Butter Naan"
          },
          {
            id: 7,
            price: "9.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Mint Naan"
          },
          {
            id: 8,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Tandoori Roti Naan"
          },
          {
            id: 9,
            price: "6.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Tandoori Butter Roti Naan"
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
            label: "Plain Paratha"
          },
          {
            id: 1,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Paneer Paratha"
          },
          {
            id: 2,
            price: "10.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Onion Paratha"
          },
          {
            id: 3,
            price: "12.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Mixed Vege Paratha"
          },
          {
            id: 4,
            price: "10.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Aloo Paratha"
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
            label: "Vittu Thosai"
          },
          {
            id: 1,
            price: "3.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Plain Thosai"
          },
          {
            id: 2,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Onion Thosai"
          },
          {
            id: 3,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Ghee Thosai"
          },
          {
            id: 4,
            price: "5.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Masala Thosai"
          },
          {
            id: 5,
            price: "4.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Rava Thosai"
          },
          {
            id: 6,
            price: "5.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Rava Masala Thosai"
          },
          {
            id: 7,
            price: "5.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Rava Onion Thosai"
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
            label: "Meeta's Special Chaat"
          },
          {
            id: 1,
            price: "13.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Ganga Aloo Chaat"
          },
          {
            id: 2,
            price: "11.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Samosa Chaat"
          },
          {
            id: 3,
            price: "14.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Samosa Chole Chaat"
          },
          {
            id: 4,
            price: "11.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Chola Tikki Chaat"
          },
          {
            id: 5,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Pani Poori"
          },
          {
            id: 6,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Dahi Potato Poori"
          },
          {
            id: 7,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Sev Potato Poori"
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
            label: "Uppama"
          },
          {
            id: 1,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Vege Uttapam"
          },
          {
            id: 2,
            price: "10.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Vege Uttapam Cheese"
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
            label: "Mee Goreng"
          },
          {
            id: 1,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Kwey Teow Goreng"
          },
          {
            id: 2,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Maggi Goreng"
          },
          {
            id: 3,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Nasi Goreng"
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
            label: "Vegetable Briyani Rice"
          },
          {
            id: 1,
            price: "25.60",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Hyderabad Dum Briyani"
          },
          {
            id: 2,
            price: "15.60",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Vegetable Pulao"
          },
          {
            id: 3,
            price: "7.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Ganga Nasi Lemak"
          },
          {
            id: 4,
            price: "7.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Basmati Rice"
          },
          {
            id: 5,
            price: "8.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Jeera Rice"
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
            label: "Ganga Standard Thali"
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
            label: "Dhal Makhani"
          },
          {
            id: 1,
            price: "14.80",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Dhal Thadka"
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
            label: "Plain Palak"
          },
          {
            id: 1,
            price: "21.60",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Palak Paneer"
          },
          {
            id: 2,
            price: "28.30",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Paneer Bhurji"
          },
          {
            id: 3,
            price: "28.30",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Paneer Tikka Masala"
          },
          {
            id: 4,
            price: "24.30",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Paneer Butter Masala"
          },
          {
            id: 5,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Chana Masala"
          },
          {
            id: 6,
            price: "17.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Bhindi Masala"
          },
          {
            id: 7,
            price: "17.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Mushroom Matar Curry"
          },
          {
            id: 8,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Aloo Matar Curry"
          },
          {
            id: 9,
            price: "22.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Mixed Vege"
          },
          {
            id: 10,
            price: "16.20",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Bombay Aloo"
          },
          {
            id: 11,
            price: "18.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Aloo Gobi"
          },
          {
            id: 12,
            price: "18.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Aloo Palak"
          },
          {
            id: 13,
            price: "18.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Baingan Ka Bharta"
          },
          {
            id: 14,
            price: "22.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Methi Malai Matar"
          },
          {
            id: 15,
            price: "31.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Vegetable Kofta"
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
            label: "Veg Chicken"
          },
          {
            id: 1,
            price: "6.70",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Veg Mutton"
          },
          {
            id: 2,
            price: "6.70",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Veg Fish"
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
            label: "Chana Bhatura"
          },
          {
            id: 1,
            price: "9.90",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Puri Set"
          },
          {
            id: 2,
            price: "8.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Samosa Set"
          },
          {
            id: 3,
            price: "12.00",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Pav Bhaji"
          },
          {
            id: 4,
            price: "10.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Hara Bhara Kebab"
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
            label: "Pranic Juice"
          },
          {
            id: 1,
            price: "13.50",
            desc:
              "Topped with melted 3 cheese blend, jalapenos, mashed black beans, queso and a hint of seasoned beef, served with housemade pico de gallo and sour cream",
            currency: "RM",
            label: "Caribbean Cooler"
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
