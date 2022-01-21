export default interface Flight {
  num: {
    default: null,
    type: string
  };
  from: {
    default: null,
    type: string
  };
  to: {
    default: null,
    type: string
  };
  from_date: {
    default: null,
    type: string
  };
  to_date: {
    default: null,
    type: string
  };
  plane: {
    default: null,
    type: string
  };
  duration: {
    default: null,
    type: number
  }
  from_gate: {
    default: null,
    type: number
  };
  to_gate: {
    default: null,
    type: number
  };
}
