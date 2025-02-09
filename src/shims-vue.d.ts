declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<object, unknown, any>;
    export default component;
}
