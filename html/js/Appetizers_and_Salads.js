let product1Count = 0;
let product2Count = 0;
let product3Count = 0;
let product4Count = 0;
let product5Count = 0;
let product6Count = 0;
let product7Count = 0;
let product8Count = 0;
let product9Count = 0;
let product10Count = 0;
let product11Count = 0;
let product12Count = 0;
let product13Count = 0;
let product14Count = 0;
let product15Count = 0;
let product16Count = 0;



function addProduct(productId) {
  switch (productId) {
    case 1:
      product1Count++;
      break;
    case 2:
      product2Count++;
      break;
    case 3:
      product3Count++;
      break;
    case 4:
      product4Count++;
      break;
    case 5:
      product5Count++;
      break;
    case 6:
      product6Count++;
      break;
    case 7:
      product7Count++;
      break;
    case 8:
      product8Count++;
      break;
    case 9:
      product9Count++;
      break;
    case 10:
      product10Count++;
      break;
    case 11:
      product11Count++;
      break;
    case 12:
      product12Count++;
      break;
    case 13:
      product13Count++;
      break;
    case 14:
      product14Count++;
      break;
    case 15:
      product15Count++;
      break;
    case 16:
      product16Count++;
      break;
  }
}

function removeProduct(productId) {
  switch (productId) {
    case 1:
      if (product1Count > 0) {
        product1Count--;
      }
      break;
    case 2:
      if (product2Count > 0) {
        product2Count--;
      }
      break;
    case 3:
      if (product3Count > 0) {
        product3Count--;
      }
      break;
    case 4:
      if (product4Count > 0) {
        product4Count--;
      }
      break;
    case 5:
      if (product5Count > 0) {
        product5Count--;
      }
      break;
  }
}

function calculateTotalPrice(productId) {
  let totalPrice = 0;
  switch (productId) {
    case 1:
      totalPrice = product1Count * 3;
      document.getElementById("price-1").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
    case 2:
      totalPrice = product2Count * 3;
      document.getElementById("price-2").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
    case 3:
      totalPrice = product3Count * 3;
      document.getElementById("price-3").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
    case 4:
      totalPrice = product4Count * 3;
      document.getElementById("price-4").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
    case 5:
      totalPrice = product5Count * 3;
      document.getElementById("price-5").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 6:
        totalPrice = product6Count * 3;
        document.getElementById("price-6").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
        break;
        case 7:
      totalPrice = product7Count * 3;
      document.getElementById("price-7").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 8:
      totalPrice = product8Count * 3;
      document.getElementById("price-8").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 9:
      totalPrice = product9Count * 3;
      document.getElementById("price-9").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 10:
      totalPrice = product10Count * 3;
      document.getElementById("price-10").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 11:
      totalPrice = product11Count * 3;
      document.getElementById("price-11").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 12:
      totalPrice = product12Count * 3;
      document.getElementById("price-12").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 13:
      totalPrice = product13Count * 3;
      document.getElementById("price-13").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 14:
      totalPrice = product14Count * 3;
      document.getElementById("price-14").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 15:
      totalPrice = product15Count * 3;
      document.getElementById("price-15").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
      case 16:
      totalPrice = product16Count * 3;
      document.getElementById("price-16").innerHTML = "السعر الكلي: " + totalPrice + " جنيه";
      break;
  }
}