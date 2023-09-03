export type UrlMappedFunction = (
  params: any,
  data?: AnalyserNode
) => Promise<{
  data: Object;
  status: number;
  message?: string;
}>;

export interface UrlPattern {
  [key: string]: UrlMappedFunction;
}

// there should be a connectoin between the url and function arguments figure out how to add a type for that.
