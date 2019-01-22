import Vue from 'vue';
export default class App extends Vue {
    modalTitle: string;
    modalOpened: boolean;
    MODAL_TRIGGER: number;
    catchKey(e: KeyboardEvent): void;
    closeModal(): void;
}
