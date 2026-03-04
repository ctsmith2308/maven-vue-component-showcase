
interface DocSection {
  id: string;
  label: string;
  component: Component;
}

type ApiTableRow<T> = Array<{
  name: keyof T;
  type: string;
  default: string;
  description: string;
}>;

interface ApiSectionProps {
  heading?: string;
  description: string;
  apiTableData: {
    data: ApiTableRow<Record<string, unknown>>;
    columns: Array<{ field: string; header: string }>;
  };
}

export type { DocSection, ApiTableRow, ApiSectionProps };