export interface Iproduct {
  pname: string;
  pid: string;
  pstatus: 'inprogress' | 'dispatch' | 'delivered';
  canReturn: number;
}
