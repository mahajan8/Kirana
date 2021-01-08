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
  ORDER_OVERDUE: 25, //Added custom on front end
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
  Overdue: 25,
  'Awaiting Confirmation': 30,
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

export const orderStatusBubbles = [
  {
    orderStatus: orderStatus.ORDER_PLACED,
    backgroundColor: '#cde4ff',
    borderColor: '#b9daff',
    labelColor: '#014085',
  },
  {
    orderStatus: orderStatus.ORDER_ACCEPTED,
    backgroundColor: '#fff3cd',
    borderColor: '#feebae',
    labelColor: '#856305',
  },
  {
    orderStatus: orderStatus.ORDER_DISPATCHED,
    backgroundColor: '#d1ecf1',
    borderColor: '#b5e4eb',
    labelColor: '#0b5460',
  },
  {
    orderStatus: orderStatus.ORDER_DELIVERED,
    backgroundColor: '#d5edda',
    borderColor: '#c2e6cb',
    labelColor: '#155824',
  },
  {
    orderStatus: orderStatus.ORDER_UPDATED,
    backgroundColor: '#f8d7da',
    borderColor: '#da9fa4',
    labelColor: '#731c23',
  },
  {
    orderStatus: orderStatus.ORDER_REJECTED,
    backgroundColor: '#f8d7da',
    borderColor: '#da9fa4',
    labelColor: '#731c23',
  },
  {
    orderStatus: orderStatus.ORDER_OVERDUE,
    backgroundColor: '#f8d7da',
    borderColor: '#da9fa4',
    labelColor: '#731c23',
  },
  {
    orderStatus: orderStatus.ORDER_CANCELLED,
    backgroundColor: '#f8d7da',
    borderColor: '#da9fa4',
    labelColor: '#731c23',
  },
];
