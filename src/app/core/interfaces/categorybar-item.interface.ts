export interface CategoryBarItem {
  id: number;
  name: string;
  url: string;
  children: CategoryBarItem[];
}