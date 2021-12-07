export type DataFilterItemValue =
  | 'rent'
  | 'new'
  | 'secondary'
  | 'verifiedInTheUSRN';

export interface DataFilterItem {
  id: number;
  title: string;
  value: DataFilterItemValue;
}

export interface DataCardItem {
  id: number;
  square: number;
  title: string;
  price: number;
  address: string;
  dataFilterValue: DataFilterItemValue;
  img: string;
}
