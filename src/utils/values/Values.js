export const unitsList = {
  Kilograms: 1,
  Grams: 2,
  Litres: 3,
  Millilitres: 4,
  Pieces: 5,
};

export const unitsShortName = {
  kg: 1,
  gm: 2,
  L: 3,
  ml: 4,
  pcs: 5,
};

export const addressTypes = {
  Home: 10,
  Work: 20,
  Other: 30,
};

export const orderStatus = {
  ORDER_INITIATED: 10,
  ORDER_NOT_PLACED: 15,
  ORDER_PLACED: 20,
  ORDER_UPDATED: 30,
  ORDER_REJECTED: 40,
  ORDER_CANCELLED: 50,
  ORDER_ACCEPTED: 60,
  ORDER_PARTIALLY_ACCEPTED: 70,
  ORDER_DISPATCHED: 80,
  ORDER_OUT_FOR_DELIVERY: 90,
  ORDER_DELIVERED: 100,
};

export const orderStatusLabels = {
  ORDER_INITIATED: 10,
  ORDER_NOT_PLACED: 15,
  New: 20,
  ORDER_UPDATED: 30,
  Rejected: 40,
  Cancelled: 50,
  Preparing: 60,
  'Partially Accepted': 70,
  Dispatched: 80,
  ORDER_OUT_FOR_DELIVERY: 90,
  Completed: 100,
};

export const paymentStatus = {
  PENDING: 10,
  SUCCESS: 20,
  FAILED: 30,
  PARTIAL_REFUND_IN_PROGRESS: 40,
  PARTIALLY_REFUNDED: 50,
  REFUND_IN_PROGRESS: 60,
  REFUNDED: 70,
};

export const paymentStatusLabels = {
  PENDING: 10,
  SUCCESS: 20,
  FAILED: 30,
  PARTIAL_REFUND_IN_PROGRESS: 40,
  PARTIALLY_REFUNDED: 50,
  'Refund In Progress': 60,
  'Refund Completed': 70,
};
