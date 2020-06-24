export = ReactRenderer;
declare function ReactRenderer(
    options: any
): {
    sourcePos: boolean;
    softBreak: any;
    renderers: any;
    escapeHtml: boolean;
    skipHtml: boolean;
    transformLinkUri: any;
    transformImageUri: any;
    allowNode: any;
    allowedTypes: any;
    unwrapDisallowed: boolean;
    render: typeof renderNodes;
    linkTarget: any;
};
declare namespace ReactRenderer {
    export { defaultLinkUriFilter as uriTransformer };
    export const types: any[];
    export const renderers: {};
}
declare function renderNodes(block: any): any;
declare function defaultLinkUriFilter(uri: any): string;
