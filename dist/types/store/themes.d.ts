export declare const dispose: () => void;
export declare const state: {
  theme: string;
};
export declare const reset: () => void;
export declare const onChange: import("@stencil/store/dist/types").OnChangeHandler<{
  theme: string;
}>;
export declare const storeTheme: import("@stencil/store").ObservableMap<{
  theme: string;
}>;
