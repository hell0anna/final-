import { Colord } from 'colord';
import { ComputePositionReturn } from '@floating-ui/dom';
import { CSSResult } from 'lit';
import { Dayjs } from 'dayjs';
import { default as default_2 } from 'dayjs';
import { LitElement } from 'lit';
import { MaskitoOptions } from '@maskito/core';
import { Middleware } from '@floating-ui/dom';
import { nothing } from 'lit';
import { OffsetOptions } from '@floating-ui/dom';
import { Padding } from '@floating-ui/dom';
import { Placement } from '@floating-ui/dom';
import { PropertyValues } from 'lit';
import { Strategy } from '@floating-ui/dom';
import { TemplateResult } from 'lit';

/**
 * Событие потери фокуса полем ввода
 */
declare class BlurEvent extends CustomEvent<IYBaseCustomEvent> {
}

/**
 * Событие потери фокуса оберткой поля
 */
declare class BlurEvent_2 extends CustomEvent<{
    event: Event;
}> {
}

declare class BlurEvent_3 extends CustomEvent<null> {
}

/**
 * Событие потери фокуса полем автодополнения
 */
declare class BlurEvent_4 extends CustomEvent<null> {
}

export declare const BREAKPOINTS: {
    readonly XS: 599;
    readonly SM: 904;
    readonly MD: 1239;
    readonly LG: 1280;
};

declare class CancelEvent extends CustomEvent<Event> {
}

declare class ChangeActiveTabEvent extends CustomEvent<IYCoreTabsChangeActiveTabEvent> {
}

declare class ChangedValueEvent extends CustomEvent<{
    value: string;
}> {
}

/**
 * Событие изменения значения поля автодополнения
 */
declare class ChangeEvent extends CustomEvent<TYCoreAutocompleteFieldInfo> {
}

/**
 * Событие очистки поля ввода
 */
declare class ClearEvent extends CustomEvent<IYBaseCustomEvent> {
}

/**
 * Событие клика по активатору
 */
declare class ClickActivatorEvent extends CustomEvent<Event> {
}

/**
 * Событие клика по иконке закрытия
 */
declare class ClickCloseIconEvent extends CustomEvent<Event> {
}

declare class ClickIconEmitEvent extends CustomEvent<PointerEvent> {
}

declare class ClickIconEmitEvent_2 extends CustomEvent<PointerEvent> {
}

/**
 * Событие клика по оверлею
 */
declare class ClickOutsideEvent extends CustomEvent<Event> {
}

declare class CloseEmitEvent extends CustomEvent<PointerEvent> {
}

/**
 * Событие закрытия модального окна
 */
declare class CloseEvent_2 extends CustomEvent<Event> {
}

declare class CollapseChangeEvent extends CustomEvent<IYCoreCollapseChangePayload> {
}

declare class CollapseItemChangeOpenedEvent extends CustomEvent<IYCoreCollapseItemChangeOpenedPayload> {
}

declare class CollapseItemClickEvent extends CustomEvent<IYCoreCollapseItemCollapseItemClickPayload> {
}

declare class CollapseMoveEvent extends CustomEvent<IYCoreCollapseMovePayload> {
}

declare class ContentMouseEnterEvent extends CustomEvent<null> {
}

declare class ContentMouseLeaveEvent extends CustomEvent<null> {
}

export declare const createCoreChipExternalProps: () => IYCoreChipExternalProps;

export declare const createCoreChipProps: () => IYCoreChipProps;

export declare const createCoreLoaderExternalProps: () => IYCoreLoaderExternalProps;

export declare const createCoreLoaderProps: () => IYCoreLoaderProps;

export declare const createCoreSkeletonExternalProps: () => IYCoreSkeletonExternalProps;

export declare const createCoreSkeletonInternalProps: () => IYCoreSkeletonInternalProps;

export declare const createCoreSkeletonProps: () => IYCoreSkeletonProps;

export declare const createCoreToggleExternalProps: () => IYCoreToggleExternalProps;

export declare const createCoreToggleProps: () => IYCoreToggleProps;

declare enum EAnchorTarget {
    SELF = "_self",
    BLANK = "_blank",
    PARENT = "_parent",
    TOP = "_top"
}

declare enum ESort {
    ASC = "asc",
    DESC = "desc",
    DEFAULT = "default"
}

declare enum ETableCellAlign {
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center"
}

declare enum EYCoreBannerVariant {
    INFORMATION = "information",
    MARKETING = "marketing",
    WARNING = "warning",
    ERROR = "error",
    NEUTRAL = "neutral"
}

declare enum EYCoreBrandButtonVariant {
    VK = "vk"
}

declare enum EYCoreButtonDropdownIconTypes {
    LEFT = "left",
    RIGHT = "right"
}

declare enum EYCoreButtonGroupVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    OUTLINE_FILLED = "outline-filled"
}

declare enum EYCoreCalloutVariant {
    INFORMATION = "information",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error",
    NEUTRAL = "neutral"
}

declare enum EYCoreCardBasicAlignment {
    TOP = "top",
    CENTER = "center"
}

declare enum EYCoreCheckboxGroupDirection {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}

export declare enum EYCoreChipVariant {
    DEFAULT = "default",
    ACCENT = "accent"
}

declare enum EYCoreCollapseItemVariant {
    SURFACE = "surface",
    PLAIN = "plain"
}

declare enum EYCoreCollapseType {
    SINGLE = "single",
    MULTIPLE = "multiple"
}

declare const EYCoreColorIconSize: {
    readonly X_24: "24";
    readonly X_32: "32";
    readonly X_40: "40";
    readonly X_48: "48";
    readonly X_64: "64";
};

declare enum EYCoreColorIconVariant {
    GREY = "grey",
    RED = "red",
    GREEN = "green",
    ACCENT = "accent",
    BLUE = "blue",
    VIOLET = "violet"
}

declare enum EYCoreCounterVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    NEGATIVE = "negative",
    OTHER_INVERT = "other-invert"
}

declare enum EYCoreDatePickerMode {
    SINGLE = "single",
    RANGE = "range",
    MIXED = "mixed"
}

declare enum EYCoreDropdownTrigger {
    CLICK = "click",
    HOVER = "hover",
    MANUAL = "manual"
}

declare enum EYCoreLabelAlignment {
    TOP = "top",
    CENTER = "center"
}

declare enum EYCoreLabelOverflowMode {
    CLAMP = "clamp",
    ELLIPSIS = "ellipsis",
    NOWRAP = "nowrap"
}

export declare enum EYCoreLoaderVariant {
    PRIMARY = "primary",
    ACCENT = "accent",
    CONTRAST = "contrast"
}

declare enum EYCoreModalVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

declare enum EYCoreRadioButtonGroupDirection {
    VERTICAL = "vertical",
    HORIZONTAL = "horizontal"
}

declare enum EYCoreSideMenuItemVariant {
    FULL = "full",
    COLLAPSE = "collapse"
}

declare enum EYCoreSimpleButtonContentAlignment {
    START = "start",
    CENTER = "center",
    END = "end"
}

declare enum EYCoreSimpleButtonVariant {
    PRIMARY = "primary",
    OUTLINE = "outline",
    OUTLINE_FILLED = "outline-filled",
    TEXT = "text"
}

declare enum EYCoreSimpleChipVariant {
    MUTED = "muted",
    DANGER = "danger",
    WARNING = "warning"
}

export declare enum EYCoreSkeletonVariant {
    LIGHT = "light",
    DARK = "dark"
}

declare enum EYCoreTagVariant {
    ACCENT = "accent",
    MUTED = "muted",
    DANGER = "danger",
    SUCCESS = "success",
    WARNING = "warning",
    INFORMATION = "information",
    DISCOVERY = "discovery"
}

declare enum EYCoreTextSize {
    H1_SEMIBOLD = "h1-semibold",
    H2_SEMIBOLD = "h2-semibold",
    H3_SEMIBOLD = "h3-semibold",
    H4_SEMIBOLD = "h4-semibold",
    P0_REGULAR = "p0-regular",
    P1_REGULAR = "p1-regular",
    P1_MEDIUM = "p1-medium",
    P2_REGULAR = "p2-regular",
    P2_MEDIUM = "p2-medium",
    S1_MEDIUM = "s1-medium",
    S1_SEMIBOLD = "s1-semibold",
    A1_REGULAR = "a1-regular",
    A1_MEDIUM = "a1-medium",
    A2_REGULAR = "a2-regular",
    A2_MEDIUM = "a2-medium",
    A3_MEDIUM = "a3-medium",
    A4_MEDIUM = "a4-medium"
}

declare enum EYCoreTextVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    TERTIARY = "tertiary",
    POSITIVE = "positive",
    NEGATIVE = "negative",
    WARNING = "warning",
    ACCENT = "accent",
    ACCENT_HIGH = "accent-high",
    PRIMARY_INVERT = "primary-invert",
    SECONDARY_INVERT = "secondary-invert",
    INHERIT = "inherit"
}

declare enum EYCoreTipType {
    INVERT = "invert",
    PRIMARY = "primary"
}

export declare enum EYCoreToastType {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}

declare const EYGridModes: {
    readonly MONTH: "month";
    readonly WEEK: "week";
};

declare enum EYInputAutocomplete {
    ON = "on",
    OFF = "off",
    TEL = "tel",
    TEL_NATIONAL = "tel-national"
}

declare enum EYInputType {
    HIDDEN = "hidden",
    TEXT = "text",
    SEARCH = "search",
    TEL = "tel",
    URL = "url",
    EMAIL = "email",
    PASSWORD = "password",
    DATETIME = "datetime",
    DATE = "date",
    MONTH = "month",
    WEEK = "week",
    TIME = "time",
    DATETIME_LOCAL = "datetime-local",
    NUMBER = "number",
    RANGE = "range",
    COLOR = "color",
    CHECKBOX = "checkbox",
    RADIO = "radio",
    FILE = "file",
    SUBMIT = "submit",
    IMAGE = "image",
    RESET = "reset",
    BUTTON = "button"
}

declare enum EYSizes {
    EXTRA_SMALL = "extra-small",
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    EXTRA_LARGE = "extra-large"
}

declare enum EYTextareaResize {
    BOTH = "both",
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    NONE = "none"
}

/**
 * Событие получения фокуса полем ввода
 */
declare class FocusEvent_2 extends CustomEvent<IYBaseCustomEvent> {
}

/**
 * Событие получения фокуса оберткой поля
 */
declare class FocusEvent_3 extends CustomEvent<{
    event: Event;
}> {
}

declare class FocusEvent_4 extends CustomEvent<null> {
}

/**
 * Событие получения фокуса полем автодополнения
 */
declare class FocusEvent_5 extends CustomEvent<null> {
}

/**
 * Глобальный контекст для управления модулями
 * @interface IGlobalContext
 * @property {THandler<TGlobalContextModule>[]} updatedHandlers - Массив обработчиков обновлений модулей
 * @property {Record<TId, TGlobalContextModule>} modules - Хранилище модулей
 * @method onUpdated - Хук для обработчиков обновлений модулей
 * @method clearHandler - Удаляет хук для обработчиков обновлений модулей
 * @method putModule - Добавляет/редактирует модуль в контекст
 * @method getModule - Получает модуль по идентификатору
 * @method getModules - Получает все модули
 * @method removeModule - Удаляет модуль из контекста
 */
declare class GlobalContext implements Required<IGlobalContext> {
    updatedHandlers: THandler<TGlobalContextModule>[];
    private modulesData;
    readonly modules: Record<string, TGlobalContextModule>;
    constructor();
    putModule(module: TGlobalContextModule): TGlobalContextModule;
    getModule(id: string): TGlobalContextModule;
    getModules(): TGlobalContextModule[];
    removeModule(id: string): string;
    update(module?: TGlobalContextModule): void;
    onUpdated(handler: THandler<TGlobalContextModule>): void;
    clearHandler(handler: THandler<TGlobalContextModule>): void;
}

declare class GlobalProviderReadyEvent extends CustomEvent<IYCoreGlobalProviderReadyEvent> {
}

/**
 * Событие изменения режима отображения сетки календаря
 */
declare class GridModeChangedEvent extends CustomEvent<IYCoreCalendarGridModeChangedEvent> {
}

declare class HideEvent extends CustomEvent<IYCoreDatePickerHideEvent> {
}

/**
 * Плагин для управления локализацией в GlobalProvider
 *
 * Использует LocaleModule для хранения данных локализации в глобальном контексте.
 *
 * @example
 * ```typescript
 * // Создание экземпляра плагина с русской локализацией
 * const i18nPlugin = new I18nPlugin(ru);
 *
 * // Использование плагина в GlobalProvider
 * <YGlobalProvider :plugins="[i18nPlugin]">
 *   <YourComponent />
 * </YGlobalProvider>
 * ```
 *
 * @example
 * ```typescript
 * // Получение модуля локализации из контекста
 * const localeModule = context.getModule(LOCALE_MODULE_ID) as ILocaleModule;
 *
 * // Переключение локализации
 * if (localeModule) {
 *   localeModule.setLocale(en);
 * }
 * ```
 */
export declare class I18nPlugin implements Required<IGlobalProviderPlugin> {
    private locale;
    id: string;
    private localeModule?;
    private context?;
    /**
     * Создает экземпляр плагина локализации
     *
     * @param locale - Объект локализации для инициализации плагина
     * По умолчанию используется русская локализация из '~core/i18n'
     */
    constructor(locale?: ILocale_2);
    /**
     * Инициализирует локализацию в глобальном контексте
     *
     * Создает модуль локализации и добавляет его в глобальный контекст.
     *
     * @param context - Глобальный контекст для установки локализации
     */
    init(context: IGlobalContext): void;
    /**
     * Возвращает текущую локализацию плагина
     *
     * @returns Текущий объект локализации, используемый плагином
     */
    getLocale(): ILocale_2;
    /**
     * Устанавливает новую локализацию
     *
     * @param locale - Новый объект локализации для установки
     */
    setLocale(locale: ILocale_2): void;
    /**
     * Уничтожает плагин и очищает состояние
     *
     */
    destroy(): void;
}

/**
 * Событие клика по правой иконке чипа
 */
export declare class IconRightClickEvent extends CustomEvent<IYBaseCustomEvent> {
}

declare interface IDropdownListItem {
    id: string | number;
    [key: string]: unknown;
}

/**
 * Форматтеры для работы с датами и числами
 */
declare interface IFormatters {
    date: {
        short: Intl.DateTimeFormatOptions;
        medium: Intl.DateTimeFormatOptions;
        long: Intl.DateTimeFormatOptions;
        monthYear: Intl.DateTimeFormatOptions;
        monthOnly: Intl.DateTimeFormatOptions;
        yearOnly: Intl.DateTimeFormatOptions;
        dayOfWeek: Intl.DateTimeFormatOptions;
        weekday: {
            narrow: Intl.DateTimeFormatOptions;
            short: Intl.DateTimeFormatOptions;
            long: Intl.DateTimeFormatOptions;
        };
        month: {
            numeric: Intl.DateTimeFormatOptions;
            narrow: Intl.DateTimeFormatOptions;
            short: Intl.DateTimeFormatOptions;
            long: Intl.DateTimeFormatOptions;
        };
    };
    number: {
        decimal: Intl.NumberFormatOptions;
        currency: Intl.NumberFormatOptions;
        percent: Intl.NumberFormatOptions;
    };
    firstDayOfWeek: 0 | 1;
}

declare interface IGlobalContext {
    updatedHandlers: THandler<TGlobalContextModule>[];
    modules: Record<string, TGlobalContextModule>;
    onUpdated: (handler: THandler<TGlobalContextModule>) => void;
    clearHandler: (handler: THandler<TGlobalContextModule>) => void;
    putModule: (module: TGlobalContextModule) => TGlobalContextModule;
    getModule: (id: string) => TGlobalContextModule | undefined;
    getModules: () => TGlobalContextModule[];
    removeModule: (id: string) => string;
}

/**
 * Базовый интерфейс для плагинов глобального провайдера
 *
 * Этот интерфейс должны реализовывать все плагины для GlobalProvider.
 * Он определяет основные методы жизненного цикла плагина.
 *
 * @example
 * ```typescript
 * // Пример создания простого плагина
 * class MyPlugin implements Required<IGlobalProviderPlugin> {
 *   id = 'my-plugin';
 *
 *   init(context: IGlobalContext): void {
 *     // Инициализация плагина
 *     console.log('MyPlugin initialized');
 *   }
 *
 *   destroy(context: IGlobalContext): void {
 *     // Освобождение ресурсов
 *     console.log('MyPlugin destroyed');
 *   }
 * }
 * ```
 */
export declare interface IGlobalProviderPlugin {
    /**
     * Уникальный идентификатор плагина
     *
     * Должен быть уникальным среди всех используемых плагинов.
     * Используется для поиска плагинов в массиве плагинов GlobalProvider.
     */
    id: string;
    /**
     * Метод инициализации плагина
     *
     * Вызывается автоматически при добавлении плагина в GlobalProvider.
     * Используется для настройки плагина и добавления данных в глобальный контекст.
     *
     * @param context - Глобальный контекст для взаимодействия
     */
    init(context: IGlobalContext): void;
    /**
     * Метод уничтожения плагина
     *
     * Вызывается автоматически при удалении плагина из GlobalProvider.
     * Используется для освобождения ресурсов и очистки данных.
     * Необязательный метод - если не реализован, при удалении плагина никаких действий не выполняется.
     *
     * @param context - Глобальный контекст для взаимодействия
     */
    destroy?(context: IGlobalContext): void;
}

/**
 * Определяет общий контракт для GlobalLoader и LoaderProxy
 */
export declare interface ILoader {
    /**
     * Показать лоадер
     * @param options - опции отображения
     */
    show(options?: ILoaderOptions): void;
    /**
     * Скрыть лоадер
     */
    hide(): void;
    /**
     * Уничтожить лоадер и освободить ресурсы
     */
    destroy(): void;
}

/**
 * Опции для GlobalLoader.show()
 */
export declare interface ILoaderOptions {
    /**
     * @default 'medium'
     */
    size?: TYCoreLoaderSize;
    /**
     * @default 'black'
     */
    variant?: TYCoreLoaderVariant;
}

/**
 * Внутреннее состояние GlobalLoader
 *
 * Примечание: referenceCount-логика вынесена в LoaderProxy
 */
export declare interface ILoaderState {
    /**
     * Overlay элемент смонтирован в DOM
     */
    isMounted: boolean;
    /**
     * Loader виден (is-visible=true на y-core-loader)
     */
    isVisible: boolean;
}

/**
 * Интерфейс локализации
 */
declare interface ILocale_2 {
    /** Название языка */
    name: string;
    /** Код языка (ISO) */
    code: string;
    /** Короткий код языка (ISO) */
    shortCode: string;
    /** Направление текста */
    dir: TDirectionType;
    /** Текстовые сообщения */
    messages: TMessages;
    /** Форматтеры для дат и чисел */
    formatters: IFormatters;
}

/**
 * Интерфейс модуля локализации
 */
declare interface ILocaleModule extends IModule {
    /**
     * Текущая локализация
     */
    locale: ILocale_2;
    /**
     * Обработчики изменения локализации
     */
    updatedHandlers: THandler<ILocale_2>[];
    /**
     * Установить локализацию
     * @param locale Объект локализации
     */
    setLocale: (locale: ILocale_2) => void;
    /**
     * Подписаться на изменение локализации
     * @param handler Обработчик изменения локализации
     */
    onUpdated: (handler: THandler<ILocale_2>) => void;
    /**
     * Удалить обработчик
     * @param handler Обработчик изменения локализации
     */
    clearHandler: (handler: THandler<ILocale_2>) => void;
}

declare interface IModule {
    id: string;
}

declare interface IModuleItem {
    id: string;
    [key: string]: unknown;
}

declare interface IMonthDayData {
    date: Dayjs;
    dayNumber: number;
    isCurrentMonth: boolean;
}

/**
 * Событие ввода в поле ввода
 */
declare class InputEvent_2 extends CustomEvent<IYCoreFieldInputInputEvent> {
    data?: string;
}

/**
 * Инициализирует все переданные плагины
 *
 * Последовательно вызывает метод `init` для каждого плагина из массива.
 * Используется внутри GlobalProvider при инициализации или обновлении списка плагинов.
 *
 * @param plugins - Массив плагинов для инициализации
 * @param context - Глобальный контекст для передачи в плагины
 */
export declare function installPlugins(plugins: IGlobalProviderPlugin[] | undefined, context: IGlobalContext): void;

/**
 * Интерфейс модуля палитры
 */
declare interface IPaletteModule extends IModule {
    /**
     * Основной цвет, используемый для генерации палитры
     */
    accentColor: Colord;
    /**
     * Флаг для включения тёмной темы
     */
    useDarkTheme: boolean;
}

declare interface IQueueModule extends IModule {
    defaultDelay?: number;
    completedTimeout?: TTimeout | null;
    updatedHandlers: THandler<IQueueModuleItem>[];
    completedHandlers: THandler<IQueueModuleItem>[];
    queue: Record<string, IQueueModuleItem>;
    putItem: (item: IQueueModuleItem, delay?: number) => IQueueModuleItem;
    getItem: (id: string) => IQueueModuleItem | undefined;
    removeItem: (id: string) => string;
    getItems: () => IQueueModuleItem[];
    clearAll: () => void;
    onCompleted: (handler: THandler<IQueueModuleItem>) => void;
    onUpdated: (handler: THandler<IQueueModuleItem>) => void;
    editDefaultDelay: (defaultDelay: number) => void;
    pauseItem: (id: string) => void;
    resumeItem: (id: string) => void;
    resetItemTimer: (id: string) => void;
    restartItemTimer: (id: string, delay: number) => void;
}

declare interface IQueueModuleItem extends IModuleItem {
    timeout?: TTimeout;
    startedAt?: number;
    pausedAt?: number;
    remainingTime?: number;
}

/**
 * Конфигурация для инициализации плагина очереди
 */
export declare interface IQueuePluginConfig {
    /**
     * ID плагина и модуля очереди
     */
    id: string;
    /**
     * Задержка по умолчанию для элементов очереди
     */
    defaultDelay?: number;
}

declare interface ISkeletonTableColumn extends Pick<IYCoreTableHeadCellProps, 'align'> {
    gridTemplate?: ITableHeadCellItem['gridTemplate'];
}

declare interface ITableCellItem {
    id: string;
    label?: string;
    style?: string;
    ellipsis?: boolean;
    lineclamp?: number;
    [key: string]: unknown;
}

declare interface ITableComponentsMap {
    [YCoreTableTagName]: YCoreTable;
    [YCoreTableBarTagName]: YCoreTableBar;
    [YCoreTableRowTagName]: YCoreTableRow;
    [YCoreTableCellTagName]: YCoreTableCell;
    [YCoreTableHeadCellTagName]: YCoreTableHeadCell;
    [YCoreTablePaginationTagName]: YCoreTablePagination;
}

declare interface ITableHeadCellItem extends ITableCellItem {
    gridTemplate?: string;
}

declare interface ITablePlugin<T extends TTablePluginComponents> {
    id: string;
    install: TTablePluginHook<T>;
    uninstall: TTablePluginHook<T>;
}

/**
 * Событие клика по элементу выпадающего списка
 */
declare class ItemClickEvent extends CustomEvent<IYCoreDropdownListItemClickEvent> {
}

/**
 * Объект для управления созданным тостом
 */
export declare interface IToastHandle extends IToastOptions {
    /** Закрыть тост */
    close: () => void;
    /** Promise, который разрешается при закрытии тоста */
    onClose: Promise<void>;
}

/**
 * Параметры тоста, используемые внутри очереди
 */
declare interface IToastItem extends IToastOptions {
    /** Длительность отображения тоста в мс */
    duration?: number;
    /** Позиция тоста */
    position: TToastQueuePosition;
}

/**
 * Параметры создания тоста
 */
export declare interface IToastOptions extends Omit<IYCoreToastExternalProps, 'description' | 'maxWidth' | 'counterValue'> {
    /** Уникальный идентификатор тоста */
    id?: string;
    /** Требуется ручное закрытие (отключает автозакрытие) */
    manualClose?: boolean;
    /** Приостанавливать ли таймер при наведении */
    pauseOnHover?: boolean;
    /** Описание (текст) тоста */
    description?: string;
    /** Максимальная ширина тоста */
    maxWidth?: string;
    /** Значение счетчика */
    counterValue?: number;
}

/**
 * Конфигурация очереди тостов
 */
export declare interface IToastQueueConfig {
    /** Максимальное количество одновременно видимых тостов */
    maxVisible: number;
    /** Позиция тостов по умолчанию */
    position: TToastQueuePosition;
    /** Длительность отображения по умолчанию в мс */
    defaultDuration?: number;
    /** Приостанавливать ли таймер при наведении по умолчанию */
    pauseOnHover?: boolean;
    /** Селектор или идентификатор хоста */
    host?: string;
}

/**
 * Интерфейс для UI хоста очереди тостов
 * Позволяет абстрагироваться от конкретной реализации (Lit, Vue, Angular)
 * @interface IToastQueueHost
 */
export declare interface IToastQueueHost {
    /**
     * Добавляет модуль очереди к хосту
     * @param module - Модуль очереди для добавления
     */
    addQueueModule(module: IQueueModule): void;
    /**
     * Удаляет модуль очереди из хоста
     */
    removeQueueModule(): void;
    /**
     * Обновляет конфигурацию хоста
     * @param config - Новая конфигурация хоста
     */
    setConfig(config: IToastQueueHostConfig): void;
    /**
     * Уничтожает хост и очищает ресурсы
     */
    destroy(): void;
}

/**
 * Конфигурация UI хоста очереди тостов
 * @interface IToastQueueHostConfig
 */
export declare interface IToastQueueHostConfig extends Omit<IToastQueueConfig, 'host'> {
}

/**
 * Интерфейс для фабрики создания хоста
 * @interface IToastQueueHostFactory
 */
export declare interface IToastQueueHostFactory {
    /**
     * Создает или возвращает существующий хост
     * @returns Экземпляр хоста очереди тостов
     */
    createHost(): IToastQueueHost;
    /**
     * Уничтожает хост и освобождает ресурсы
     */
    destroyHost(): void;
}

/**
 * Интерфейс модуля очереди тостов
 */
declare interface IToastQueueModule extends IQueueModule {
    /**
     * Добавить тост в очередь
     * @param options Параметры тоста
     * @returns Объект для управления тостом
     */
    notify: (options: IToastOptions) => IToastHandle;
    /**
     * Получить текущую конфигурацию очереди
     */
    getConfig: () => IToastQueueConfig;
    /**
     * Обновить конфигурацию очереди
     * @param config Частичная конфигурация
     */
    updateConfig: (config: Partial<IToastQueueConfig>) => void;
    /**
     * Получить хост-элемент для рендеринга тостов
     */
    getHost: () => IToastQueueHost | null;
    /**
     * Уничтожить хост-элемент
     */
    destroyHost: () => void;
    /**
     * Ставит на паузу удаление всех тостов
     */
    pauseAll: () => void;
    /**
     * Возвращает с паузы удаление всех тостов
     */
    resumeAll: () => void;
    /**
     * Устанавливает набор видимых тостов для управления таймерами
     * @param visibleIds Набор ID видимых тостов
     * @param pauseForHover Признак паузы по наведению
     * @param durationOverrides Переопределения длительности показа для конкретных тостов
     */
    setVisibleIds: (visibleIds: Set<string>, pauseForHover?: boolean, durationOverrides?: ReadonlyMap<string, number> | null) => void;
}

/**
 * Элемент очереди тостов
 */
declare interface IToastQueueModuleItem extends IQueueModuleItem {
    /** Параметры тоста */
    toast: IToastItem;
}

/**
 * Конфигурация для плагина тостов.
 */
export declare interface IToastsPluginConfig {
    /**
     * Уникальный ID плагина среди других плагинов.
     */
    id: string;
    /**
     * Конфигурация очереди тостов (рендер, таймеры, позиция и т.д.)
     */
    moduleConfig?: IToastQueueConfig;
}

declare interface IYBaseCustomEvent<T = Event> {
    event: T;
}

declare interface IYCoreAnnotationExternalProps {
    text: string | undefined;
    disabled: boolean | undefined;
}

declare interface IYCoreAnnotationProps extends IYCoreAnnotationExternalProps {
}

/**
 * Свойства компонента AutocompleteField
 */
declare interface IYCoreAutocompleteFieldExternalProps extends Omit<IYCoreFieldWrapperProps, 'clickable'>, Omit<IYCoreFieldInputProps, 'hideSpaceLeft' | 'hideSpaceRight' | 'disabled' | 'size' | 'maxlength' | 'type' | 'autocomplete'>, TAddPrefixToObject<Omit<IYCoreLabelExternalProps, 'alignment' | 'disabled' | 'required' | 'overflowMode'>, 'label'>, TAddPrefixToObject<Omit<IYCoreAnnotationExternalProps, 'disabled'>, 'annotation'>, IYCoreErrorExternalProps {
    /**
     * Минимальное количество символов для начала поиска
     * @default 3
     */
    minSearchLength: number | undefined;
    /**
     * Отключить автодополнение
     */
    disabledAutocomplete: boolean | undefined;
    /**
     * Подсвечивать результаты поиска
     */
    highlightResult: boolean | undefined;
    /**
     * Функция поиска
     */
    searchFunction: ((query: TYCoreAutocompleteFieldInfo) => Promise<TYCoreAutocompleteFieldAutocompleteOption[]> | TYCoreAutocompleteFieldAutocompleteOption[]) | undefined;
    /**
     * Заголовок для пустого состояния
     */
    emptyStateTitle: IYCoreEmptyStateExternalProps['title'] | undefined;
    /**
     * Описание для пустого состояния
     */
    emptyStateDescription: IYCoreEmptyStateExternalProps['description'] | undefined;
    /**
     * Иконка для пустого состояния
     */
    emptyStateIcon: IYCoreEmptyStateExternalProps['icon'] | undefined;
    /**
     * Позиция подсказки для метки
     */
    labelTooltipPlacement: IYCoreLabelExternalProps['tooltipPlacement'];
    /**
     * Ограничение длины текста с многоточием
     * @default true
     */
    ellipsis: boolean | undefined;
    /**
     * Локатор компонента
     */
    locator: string | undefined;
    /**
     * Локатор лейбла
     */
    labelLocator: string | undefined;
}

/**
 * Свойства компонента Avatar
 */
declare interface IYCoreAvatarExternalProps {
    /**
     * Размер аватара
     * @default '40px'
     */
    size: TYAvatarSizes | undefined;
    /**
     * Инициалы для отображения
     */
    initials: string | undefined;
    /**
     * URL аватара
     */
    photo: string | undefined;
    /**
     * Иконка для отображения
     */
    icon: IYIcon | undefined;
    /**
     * Отключить аватар
     * @default false
     */
    disabled: boolean | undefined;
    /**
     * Цвет аватара
     * @default 'default'
     */
    color: 'default' | 'accent' | undefined;
}

declare interface IYCoreAvatarInternalProps {
}

declare interface IYCoreAvatarProps extends IYCoreAvatarExternalProps, IYCoreAvatarInternalProps {
}

declare interface IYCoreBadgeExternalProps {
}

declare interface IYCoreBadgeProps extends IYCoreBadgeExternalProps {
}

/**
 * Свойства компонента Banner
 */
declare interface IYCoreBannerExternalProps extends Pick<IYCoreSimpleBannerProps, 'description' | 'primaryButtonText' | 'hideCloseIcon'> {
    /**
     * Вариант отображения баннера
     * @default 'information'
     */
    variant: TYCoreBannerVariant | undefined;
    /**
     * Показать баннер
     * @default true
     */
    open: boolean | undefined;
}

declare interface IYCoreBannerProps extends IYCoreBannerExternalProps {
}

/**
 * Свойства компонента BrandButton
 */
declare interface IYCoreBrandButtonExternalProps extends Pick<IYCoreSimpleButtonExternalProps, 'size' | 'disabled' | 'loading' | 'fullWidth'> {
    /**
     * Вариант отображения кнопки бренда
     * @default 'vk'
     */
    variant: EYCoreBrandButtonVariant;
    /**
     * Текст кнопки
     */
    text: string;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     */
    locator: string | undefined;
}

declare interface IYCoreBrandButtonInternalProps {
}

declare interface IYCoreBrandButtonProps extends IYCoreBrandButtonExternalProps, IYCoreBrandButtonInternalProps {
}

/**
 * Свойства компонента ButtonDropdown
 */
declare interface IYCoreButtonDropdownProps extends Pick<IYCoreButtonProps, 'disabled' | 'loading' | 'fullWidth' | 'size' | 'variant' | 'label' | 'alignment'>, Pick<IYCoreDropdownProps, 'isOpen'>, Pick<IYCoreDropdownListProps, 'items' | 'noMaxHeight'> {
    /**
     * Позиция выпадающего списка
     * Если не задана, определяется автоматически в зависимости от положения кнопки
     */
    placement: IYCoreDropdownProps['placement'];
    /**
     * Тип иконки
     * @default 'right'
     */
    iconType: TYCoreButtonDropdownIconTypes | undefined;
    /**
     * Автоматически закрывать при выборе
     * @default false
     */
    autoClose: boolean | undefined;
}

/**
 * Свойства компонента Button
 */
declare interface IYCoreButtonExternalProps extends IYCoreSimpleButtonExternalProps {
    /**
     * Текст кнопки
     */
    label: string | undefined;
    /**
     * Иконка перед контентом кнопки
     */
    iconLeft: IYIcon | undefined;
    /**
     * Иконка после контента кнопки
     */
    iconRight: IYIcon | undefined;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     */
    locator: string | undefined;
}

/**
 * Свойства компонента ButtonGroup
 */
declare interface IYCoreButtonGroupExternalProps {
    /**
     * Размер кнопок в группе
     * @default 'small'
     */
    size: Extract<TYSizes, 'small' | 'medium' | 'large'>;
    /**
     * Вариант отображения кнопок
     * @default 'primary'
     */
    variant: TYCoreButtonGroupVariant;
}

declare interface IYCoreButtonGroupProps extends IYCoreButtonGroupExternalProps {
}

declare interface IYCoreButtonProps extends IYCoreButtonExternalProps {
}

/**
 * Свойства компонента Calendar
 */
declare interface IYCoreCalendarExternalProps {
    /**
     * Выбранная дата или диапазон дат
     */
    date: string | [string, string] | undefined;
    /**
     * Режим выбора диапазона дат
     * @default false
     */
    isRange: boolean | undefined;
    /**
     * Режим чтения выбранного диапазона дат
     * Если true, то выбранный диапазон дат нельзя изменять, только выбирать новый
     * @default false
     */
    isSelectedRangeReadOnly: boolean | undefined;
    /**
     * Режим отображения сетки
     * @default 'month'
     */
    gridMode: TEYGridModes | undefined;
    /**
     * Размер календаря
     * @default 'medium'
     */
    size: Extract<TYSizes, 'small' | 'medium'> | undefined;
    /**
     * Минимальная доступная дата
     */
    minDate: string | undefined;
    /**
     * Максимальная доступная дата
     */
    maxDate: string | undefined;
    /**
     * Отключить календарь
     * @default false
     */
    disabled: boolean | undefined;
    /**
     * Селекторы для заголовка календаря
     * @default true
     */
    headerSelectors: boolean | undefined;
    /**
     * Разрешает не указывать год: в селекторе годов появляется пункт «Год не указан».
     * После его выбора выбирается только месяц и день, дата эмитится в формате `format`.
     * Доступно только для одиночного выбора (несовместимо с isRange).
     * @default false
     */
    allowEmptyYear: boolean | undefined;
    /**
     * Формат даты без года (dayjs) — по нему разбирается входной `date` без года и в нём же эмитится выбор.
     * Порядок и разделитель задаются явно: "MM-DD" → "07-20", "DD.MM" → "20.07". Строка должна
     * соответствовать формату целиком (строгий разбор). Действует только при allowEmptyYear.
     * @default 'MM-DD'
     */
    emptyYearFormat: string | undefined;
    /**
     * Локаль для отображения дат
     */
    locale: ILocale_2 | undefined;
    /**
     * Доступные для выбора даты
     */
    availableDates: TYCalendarDateAvailabilityRule | undefined;
    /**
     * Заблокированные даты
     */
    disabledDates: TYCalendarDateAvailabilityRule | undefined;
    /**
     * Отмеченные даты
     */
    checkedDates: TYCalendarDateAvailabilityRule | undefined;
    /**
     * Текст тултипа для заблокированных дат
     */
    disabledDatesTooltipText: string | undefined;
    /**
     * Единый цвет доступных дат: все кликабельные даты основным цветом
     * (включая даты соседних месяцев), недоступные — вторичным вместо третичного.
     * Если заданы checkedDates, отмеченные даты выделяются основным цветом текста
     * без фона, а неотмеченные — вторичным (но остаются кликабельными).
     * @default false
     */
    uniformDatesColor: boolean | undefined;
    /**
     * Функция обратного вызова для получения текста тултипа заблокированной даты
     */
    getTooltipTextForDate: ((date: string | Dayjs) => string) | undefined;
}

/**
 * Событие изменения режима отображения сетки календаря
 */
declare interface IYCoreCalendarGridModeChangedEvent {
    /**
     * Новый режим отображения сетки
     */
    value: Extract<IYCoreCalendarExternalProps['gridMode'], string>;
}

/**
 * Событие переключения года/месяца в календаре
 */
declare interface IYCoreCalendarNavigationEvent {
    /**
     * Выбранный год/месяц в календаре.
     * year равен null в режиме без года (allowEmptyYear) — год не указан
     */
    value: {
        year: number | null;
        month: number;
    };
}

declare interface IYCoreCalendarProps extends IYCoreCalendarExternalProps {
}

/**
 * Событие окончания выбора диапазона дат
 */
declare interface IYCoreCalendarRangeEndEvent {
    /**
     * Конечная дата диапазона
     */
    value: Extract<IYCoreCalendarExternalProps['date'], string>;
}

/**
 * Событие начала выбора диапазона дат
 */
declare interface IYCoreCalendarRangeStartEvent {
    /**
     * Начальная дата диапазона
     */
    value: Extract<IYCoreCalendarExternalProps['date'], string>;
}

/**
 * Событие выбора даты в календаре
 */
declare interface IYCoreCalendarSelectEvent {
    /**
     * Выбранная дата или диапазон дат
     */
    value: IYCoreCalendarExternalProps['date'];
}

/**
 * Свойства компонента Callout
 */
declare interface IYCoreCalloutExternalProps extends Pick<IYCoreSimpleBannerProps, 'description' | 'header' | 'primaryButtonText' | 'primaryButtonVariant' | 'secondaryButtonText' | 'secondaryButtonVariant' | 'hideCloseIcon'> {
    /**
     * Вариант отображения callout
     * @default 'information'
     */
    variant: TYCoreCalloutVariant;
    /**
     * Показать callout
     * @default true
     */
    open: boolean | undefined;
    /**
     * Скрыть слот media и встроенную иконку
     * @default false
     */
    hideMedia: boolean | undefined;
}

declare interface IYCoreCalloutProps extends IYCoreCalloutExternalProps {
}

/**
 * Свойства компонента CardBasic
 */
declare interface IYCoreCardBasicExternalProps extends IYCoreCardBasicLeftSideProps, IYCoreCardBasicTextContentProps, IYCoreCardBasicRightSideProps {
    /**
     * Внутренние отступы карточки
     */
    padding: Extract<TYSizes, 'small' | 'large'> | undefined;
    /**
     * Выравнивание контента карточки по оси X
     */
    alignment: TYCoreCardBasicAlignment | undefined;
    /**
     * Затемняет фон при событии hover, активно при заданном padding
     */
    hoverable: boolean | undefined;
    /**
     * Выделяет карточку как выбранную
     */
    selected: boolean | undefined;
}

declare interface IYCoreCardBasicLeftSideProps {
    /**
     * Размер карточки
     */
    size: Extract<TYSizes, 'small' | 'medium' | 'large'>;
}

declare interface IYCoreCardBasicProps extends IYCoreCardBasicExternalProps {
}

declare interface IYCoreCardBasicRightSideProps {
    /**
     * Показывать стрелку (chevron)
     */
    chevron: Extract<TYSizes, 'small' | 'large'> | undefined;
    /**
     * Можно ли удалить карточку
     */
    removable: boolean | undefined;
}

declare interface IYCoreCardBasicTextContentProps {
    /**
     * Размер заголовка
     * @default 'default'
     */
    titleSize: 'small' | 'default';
    /**
     * Текст заголовка
     */
    titleText: string;
    /**
     * Текст аннотации
     */
    annotationText: string | undefined;
    /**
     * Текст подзаголовка
     */
    subheadText: string | undefined;
}

declare interface IYCoreCardButtonExternalProps extends Omit<IYCoreCardWrapperProps, 'checked'>, IYCoreCardHeaderProps {
    annotation: string | undefined;
}

declare interface IYCoreCardButtonProps extends IYCoreCardButtonExternalProps {
}

declare interface IYCoreCardCheckboxExternalProps extends Pick<IYCoreCardWrapperProps, 'disabled' | 'size' | 'checked'> {
}

declare interface IYCoreCardCheckboxProps extends IYCoreCardCheckboxExternalProps {
}

declare interface IYCoreCardHeaderExternalProps extends Pick<IYCoreCardWrapperProps, 'disabled' | 'size'> {
    headerText: string | undefined;
    tagText: string | undefined;
    tagVariant: TYCoreTagVariant | undefined;
    headerIcon: IYIcon | undefined;
}

declare interface IYCoreCardHeaderProps extends IYCoreCardHeaderExternalProps {
}

declare interface IYCoreCardIconExternalProps extends Pick<IYCoreCardWrapperProps, 'size' | 'disabled'>, Pick<IYCoreColorIconExternalProps, 'icon' | 'variant'> {
}

declare interface IYCoreCardIconProps extends IYCoreCardIconExternalProps {
}

declare interface IYCoreCardMainExternalProps extends Pick<IYCoreCardWrapperProps, 'disabled' | 'size'> {
    hideSpaceLeft: boolean | undefined;
    hideSpaceRight: boolean | undefined;
    hasAnnotation: boolean | undefined;
}

declare interface IYCoreCardMainProps extends IYCoreCardMainExternalProps {
}

declare interface IYCoreCardRadioExternalProps extends Pick<IYCoreCardWrapperProps, 'disabled' | 'size' | 'checked'> {
}

declare interface IYCoreCardRadioProps extends IYCoreCardRadioExternalProps {
}

declare interface IYCoreCardSelectExternalProps extends IYCoreCardWrapperProps, IYCoreCardHeaderProps {
    annotation: string | undefined;
    hideAfterSlot: boolean | undefined;
}

declare interface IYCoreCardSelectProps extends IYCoreCardSelectExternalProps {
}

declare interface IYCoreCardSimpleIconExternalProps extends Pick<IYCoreCardWrapperProps, 'size'>, Pick<IYCoreIconExternalProps, 'icon'> {
}

declare interface IYCoreCardSimpleIconProps extends IYCoreCardSimpleIconExternalProps {
}

declare interface IYCoreCardWrapperExternalProps {
    checked: boolean | undefined;
    disabled: boolean | undefined;
    hoverable: boolean | undefined;
    focusable: boolean | undefined;
    size: Extract<TYSizes, 'small' | 'medium' | 'large'> | undefined;
}

declare interface IYCoreCardWrapperProps extends IYCoreCardWrapperExternalProps {
}

/**
 * Свойства компонента Checkbox
 */
declare interface IYCoreCheckboxExternalProps extends IYCoreSimpleCheckboxExternalProps, Omit<IYCoreLabelExternalProps, 'text' | 'tooltipText' | 'disabled' | 'debounce' | 'tooltipPlacement' | 'overflowMode'>, Omit<IYCoreAnnotationExternalProps, 'text' | 'disabled'>, IYCoreErrorExternalProps {
    /**
     * Текст лейбла
     */
    labelText: IYCoreLabelExternalProps['text'];
    /**
     * Текст подсказки для лейбла
     */
    labelTooltipText: IYCoreLabelExternalProps['tooltipText'];
    /**
     * Задержка для определения переполнения текста лейбла
     */
    labelOverflowDebounce: IYCoreLabelExternalProps['debounce'];
    /**
     * Текст аннотации
     */
    annotationText: IYCoreAnnotationExternalProps['text'];
    /**
     * Позиция подсказки для метки
     */
    labelTooltipPlacement: IYCoreLabelExternalProps['tooltipPlacement'];
}

/**
 * Свойства компонента CheckboxGroup
 */
declare interface IYCoreCheckboxGroupExternalProps {
    /**
     * Направление позиционирования
     * @default 'vertical'
     */
    direction: TYCoreCheckboxGroupDirection | undefined;
    /**
     * Текст лейбла
     */
    labelText: IYCoreLabelExternalProps['text'];
    /**
     * Выравнивание текста лейбла
     */
    labelAlignment: IYCoreLabelExternalProps['alignment'];
    /**
     * Задержка для определения переполнения текста лейбла
     */
    labelOverflowDebounce: IYCoreLabelExternalProps['debounce'];
    /**
     * Текст подсказки для лейбла
     */
    labelTooltipText: IYCoreLabelExternalProps['tooltipText'];
    /**
     * Флаг, указывающий, что подсказка для лейбла доступна
     */
    labelTooltipActive: boolean | undefined;
    /**
     * Позиция подсказки для метки
     */
    labelTooltipPlacement: IYCoreLabelExternalProps['tooltipPlacement'];
}

declare interface IYCoreCheckboxGroupProps extends IYCoreCheckboxGroupExternalProps {
}

declare interface IYCoreCheckboxProps extends IYCoreCheckboxExternalProps {
}

/**
 * Свойства компонента Chip
 */
export declare interface IYCoreChipExternalProps {
    /**
     * Текст метки
     */
    labelText: string;
    /**
     * Иконка слева
     */
    iconLeft: IYIcon | undefined;
    /**
     * Иконка справа
     */
    iconRight: IYIcon | undefined;
    /**
     * Размер чипа
     * @default 'small'
     */
    size: TYCoreChipSize | undefined;
    /**
     * Вариант отображения чипа
     * @default 'default'
     */
    variant: TYCoreChipVariant | undefined;
    /**
     * Активен ли чип
     */
    active: boolean | undefined;
    /**
     * Отключить чип
     */
    disabled: boolean | undefined;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     */
    locator: string | undefined;
}

export declare interface IYCoreChipProps extends IYCoreChipExternalProps {
}

declare interface IYCoreCollapseChangePayload {
    event: Event;
    value: IYCoreCollapseProps['value'];
}

/**
 * Свойства компонента Collapse
 */
declare interface IYCoreCollapseExternalProps {
    /**
     * Значение открытых элементов
     */
    value: TCollapseItemValueSingle | TCollapseItemValueMultiple | undefined;
    /**
     * Тип компонента
     * @default 'single'
     */
    type: TYCoreCollapseType | undefined;
    /**
     * Вариант отображения
     * @default 'primary'
     */
    variant: IYCoreCollapseItemProps['variant'];
    /**
     * Можно ли перетаскивать элементы
     * @default false
     */
    draggable: boolean;
    /**
     * Разрешить перемещение между уровнями
     * @default false
     */
    allowCrossLevelMove: boolean;
}

declare interface IYCoreCollapseInternalProps {
}

declare interface IYCoreCollapseItemChangeOpenedPayload {
    opened: boolean;
    value: IYCoreCollapseItemProps['value'];
}

declare interface IYCoreCollapseItemCollapseItemClickPayload {
    event: Event;
    value: IYCoreCollapseItemProps['value'];
    opened: IYCoreCollapseItemProps['opened'];
}

/**
 * Свойства компонента CollapseItem
 */
declare interface IYCoreCollapseItemExternalProps {
    /**
     * Текст метки
     */
    label: string | undefined;
    /**
     * Текст аннотации
     */
    annotation: string | undefined;
    /**
     * Открыт ли элемент
     * @default false
     */
    opened: boolean | undefined;
    /**
     * Показывать индикатор загрузки
     */
    loading: boolean | undefined;
    /**
     * Значение элемента
     */
    value: NonNullable<TPrimitive> | undefined;
    /**
     * Вариант отображения
     * @default 'surface'
     */
    variant: TCollapseItemVariant | undefined;
    /**
     * Варианты вертикальных паддингов компонента
     * @default 'medium'
     */
    spacingSize: Extract<TYSizes, 'small' | 'medium' | 'large'> | undefined;
    /**
     * Варианты размеров лейбла
     * @default 'medium'
     */
    labelSize: Extract<TYSizes, 'small' | 'medium' | 'large'> | undefined;
    /**
     * Отображать многоточие для основного текста
     * @default true
     */
    textEllipsis: boolean | undefined;
    /**
     * максимальное количество строк основного текста, при котором будет отображаться многоточие
     * @default 1
     */
    textLineClamp: number | undefined;
    /**
     * Оптимизация рендера вложенного контента. Если `true`, то контент будет отрисован только при открытии элемента. Если `false`, то контент будет отрисован всегда.
     * @default false
     */
    lazyMode: boolean | undefined;
}

declare interface IYCoreCollapseItemInternalProps {
}

declare interface IYCoreCollapseItemProps extends IYCoreCollapseItemExternalProps, IYCoreCollapseItemInternalProps {
}

declare interface IYCoreCollapseMovePayload {
    event: DragEvent;
    order: IYCoreCollapseProps['value'][];
}

declare interface IYCoreCollapseProps extends IYCoreCollapseExternalProps, IYCoreCollapseInternalProps {
}

declare interface IYCoreColorIconExternalProps {
    icon: IYIcon;
    size: TYCoreColorIconSize | undefined;
    variant: TYCoreColorIconVariant | undefined;
    disabled: boolean | undefined;
}

declare interface IYCoreColorIconProps extends IYCoreColorIconExternalProps {
}

/**
 * Свойства компонента Counter
 */
declare interface IYCoreCounterExternalProps {
    /**
     * Вариант отображения счетчика
     * @default 'primary'
     */
    variant: TYCoreCounterVariant;
    /**
     * Размер счетчика
     * @default 'small'
     */
    size: Extract<TYSizes, 'small' | 'medium'> | undefined;
    /**
     * Отключить счетчик
     * @default false
     */
    disabled: boolean | undefined;
    /**
     * Числовое значение счетчика
     * @default 0
     */
    value: number;
    /**
     * Показывать знак плюс для положительных значений
     */
    withPlusSign: boolean | undefined;
    /**
     * Максимальное значение счетчика. При превышении отображается как «N+»
     * @default 999
     */
    maxValue: number | undefined;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     */
    locator: string | undefined;
}

declare interface IYCoreCounterInternalProps {
    /* Excluded from this release type: bordered */
}

declare interface IYCoreCounterProps extends IYCoreCounterExternalProps, IYCoreCounterInternalProps {
}

declare interface IYCoreCountFieldExternalProps extends Omit<IYCoreTextFieldExternalProps, 'clearable' | 'type' | 'maxlength' | 'maskOptions' | 'labelOverflowMode'> {
    min: number | undefined;
    max: number | undefined;
}

declare interface IYCoreCountFieldInternalProps {
}

declare interface IYCoreCountFieldProps extends IYCoreCountFieldExternalProps, IYCoreCountFieldInternalProps {
}

/**
 * Свойства компонента DatePicker
 */
declare interface IYCoreDatePickerExternalProps extends Omit<IYCoreFieldWrapperProps, 'clickable'>, Omit<IYCoreFieldInputProps, 'hideSpaceLeft' | 'hideSpaceRight' | 'disabled' | 'size' | 'readonly' | 'value' | 'maxlength' | 'type' | 'autocomplete'>, Omit<IYCoreCalendarExternalProps, 'disabled' | 'headerSelectors' | 'isRange' | 'isSelectedRangeReadOnly' | 'gridMode' | 'size' | 'uniformDatesColor'>, TAddPrefixToObject<Omit<IYCoreLabelExternalProps, 'alignment' | 'disabled' | 'required' | 'overflowMode'>, 'label'>, TAddPrefixToObject<Omit<IYCoreAnnotationExternalProps, 'disabled'>, 'annotation'>, IYCoreErrorExternalProps {
    /**
     * Селекторы для заголовка календаря
     */
    calendarHeaderSelectors: IYCoreCalendarExternalProps['headerSelectors'];
    /**
     * Режим выбора даты
     * @default 'single'
     */
    mode: `${EYCoreDatePickerMode}` | undefined;
    /**
     * Разрешает выбор пустой даты
     * @default false
     */
    allowEmptyDate: boolean | undefined;
}

declare interface IYCoreDatePickerHideEvent {
}

declare interface IYCoreDatePickerPickEvent {
    value: IYCoreDatePickerExternalProps['date'];
}

declare interface IYCoreDatePickerProps extends IYCoreDatePickerExternalProps {
}

declare interface IYCoreDatePickerShowEvent {
}

declare interface IYCoreDropdownCellExternalProps {
    locator: string | undefined;
    focused: boolean | undefined;
}

declare interface IYCoreDropdownCellInternalProps {
}

declare interface IYCoreDropdownCellProps extends IYCoreDropdownCellExternalProps, IYCoreDropdownCellInternalProps {
}

declare interface IYCoreDropdownCellTextExternalProps {
    label: string;
    subtitle: string;
    subhead: string;
}

declare interface IYCoreDropdownCellTextInternalProps {
}

declare interface IYCoreDropdownCellTextProps extends IYCoreDropdownCellTextExternalProps, IYCoreDropdownCellTextInternalProps {
}

declare interface IYCoreDropdownExternalProps {
    padding: Padding | undefined;
    offset: OffsetOptions | undefined;
    trigger: TEYCoreDropdownTrigger | undefined;
    isOpen: boolean | undefined;
    placement: Placement | undefined;
    strategy: Strategy | undefined;
    transition: string | undefined;
    disabled: boolean | undefined;
    inline: boolean | undefined;
    delay: number | undefined;
}

declare interface IYCoreDropdownInternalProps {
    middlewares: Middleware[] | undefined;
    handlers: TYCoreDropdownPositionCallback[] | undefined;
    strictWidth: boolean | undefined;
}

declare interface IYCoreDropdownListExternalProps {
    items: IDropdownListItem[] | undefined;
    itemLabel: keyof IDropdownListItem | undefined;
    minWidth: string | undefined;
    noMaxHeight: boolean | undefined;
    useVirtualScroll: boolean | undefined;
}

declare interface IYCoreDropdownListInternalProps {
}

/**
 * Событие клика по элементу выпадающего списка
 */
declare interface IYCoreDropdownListItemClickEvent {
    /**
     * Выбранный элемент
     */
    item: IDropdownListItem;
}

declare interface IYCoreDropdownListProps extends IYCoreDropdownListExternalProps, IYCoreDropdownListInternalProps {
}

declare interface IYCoreDropdownProps extends IYCoreDropdownExternalProps, IYCoreDropdownInternalProps {
}

declare interface IYCoreEmptyStateExternalProps {
    title: string;
    description: string;
    icon: IYIcon | false | undefined;
    size: Extract<TYSizes, 'small' | 'medium'> | undefined;
}

declare interface IYCoreErrorExternalProps {
    errors: string[] | undefined;
    locator: string | undefined;
}

declare interface IYCoreFieldAvatarExternalProps extends Pick<IYCoreFieldWrapperProps, 'disabled' | 'size'>, Pick<IYCoreAvatarProps, 'photo' | 'initials' | 'icon'> {
}

declare interface IYCoreFieldAvatarInternalProps {
}

declare interface IYCoreFieldAvatarProps extends IYCoreFieldAvatarExternalProps, IYCoreFieldAvatarInternalProps {
}

declare interface IYCoreFieldIconExternalProps extends Pick<IYCoreFieldWrapperProps, 'disabled' | 'size' | 'readonly'>, Pick<IYCoreIconProps, 'icon'> {
    hoverable: boolean | undefined;
    clickable: boolean | undefined;
    locator: string | undefined;
}

declare interface IYCoreFieldIconInternalProps {
}

declare interface IYCoreFieldIconProps extends IYCoreFieldIconExternalProps, IYCoreFieldIconInternalProps {
}

declare interface IYCoreFieldInputExternalProps extends Pick<IYCoreFieldWrapperProps, 'disabled' | 'size' | 'readonly'> {
    value: string;
    name: string | undefined;
    type: TYInputType | undefined;
    placeholder: string | undefined;
    required: boolean | undefined;
    maxlength: number | undefined;
    autofocus: boolean;
    hideSpaceLeft: boolean | undefined;
    hideSpaceRight: boolean | undefined;
    autocomplete: TYInputAutocomplete | undefined;
    maskOptions: MaskitoOptions | undefined;
    ellipsis: boolean | undefined;
}

/**
 * Событие ввода в поле ввода
 */
declare interface IYCoreFieldInputInputEvent extends IYBaseCustomEvent<IYBaseCustomEvent['event'] | InputEvent_2> {
    /**
     * Введенное значение
     */
    value: string;
}

declare interface IYCoreFieldInputInternalProps {
}

/**
 * Событие нажатия клавиши в поле ввода
 */
declare interface IYCoreFieldInputKeydownEvent extends IYBaseCustomEvent {
    /**
     * Код нажатой клавиши
     */
    code: string;
    /**
     * Объект события клавиатуры
     */
    event: KeyboardEvent;
}

declare interface IYCoreFieldInputProps extends IYCoreFieldInputExternalProps, IYCoreFieldInputInternalProps {
}

declare interface IYCoreFieldTextareaExternalProps extends Omit<IYCoreFieldInputExternalProps, 'type' | 'maskOptions' | 'ellipsis'> {
    rows: number | undefined;
    resize: TYTextareaResize | undefined;
    autogrow: boolean | undefined;
}

declare interface IYCoreFieldTextareaInternalProps {
}

declare interface IYCoreFieldTextareaProps extends IYCoreFieldTextareaExternalProps, IYCoreFieldTextareaInternalProps {
}

declare interface IYCoreFieldWrapperExternalProps {
    disabled: boolean | undefined;
    readonly: boolean | undefined;
    error: boolean | undefined;
    size: Extract<TYSizes, 'small' | 'medium' | 'large'> | undefined;
    clickable: boolean | undefined;
}

declare interface IYCoreFieldWrapperInternalProps {
}

declare interface IYCoreFieldWrapperProps extends IYCoreFieldWrapperExternalProps, IYCoreFieldWrapperInternalProps {
}

declare interface IYCoreFunctionalModalExternalProps extends Omit<IYCoreModalExternalProps, 'variant'> {
    heading: string | undefined;
    subHeading: string | undefined;
    locale: ILocale_2 | undefined;
    hideFooter: boolean | undefined;
    persistent: boolean | undefined;
}

declare interface IYCoreFunctionalModalProps extends IYCoreFunctionalModalExternalProps {
}

declare interface IYCoreGlobalProviderExternalProps {
    /**
     * Плагины для глобального провайдера
     */
    plugins: IGlobalProviderPlugin[] | undefined;
    useDisplayContents: boolean | undefined;
}

declare interface IYCoreGlobalProviderInternalProps {
}

declare interface IYCoreGlobalProviderProps extends IYCoreGlobalProviderExternalProps, IYCoreGlobalProviderInternalProps {
}

declare interface IYCoreGlobalProviderReadyEvent {
    value: IGlobalContext;
}

declare interface IYCoreIconButtonBadgeIndicator {
    type: 'badge';
}

declare interface IYCoreIconButtonCounterIndicator extends Pick<IYCoreCounterExternalProps, 'value'>, Partial<Pick<IYCoreCounterExternalProps, 'maxValue'>> {
    type: 'counter';
}

declare interface IYCoreIconButtonExternalProps extends Omit<IYCoreSimpleButtonExternalProps, 'hostStyles' | 'alignment' | 'variant'> {
    icon: IYIcon | undefined;
    indicator: TYCoreIconButtonIndicator | undefined;
    active: boolean;
    variant: TYCoreIconButtonVariant;
    tooltipText: string | undefined;
    tooltipPlacement: Placement | undefined;
}

declare interface IYCoreIconButtonProps extends Omit<IYCoreIconButtonExternalProps, 'alignment'> {
}

/**
 * Свойства компонента Icon
 */
declare interface IYCoreIconExternalProps {
    /**
     * Иконка для отображения
     */
    icon: IYIcon;
    /**
     * Размер иконки (width и height)
     * @default '24px'
     */
    size: string | undefined;
}

declare interface IYCoreIconProps extends IYCoreIconExternalProps {
}

declare interface IYCoreLabelExternalProps {
    text: string | undefined;
    tooltipText: string | undefined;
    alignment: TYCoreLabelAlignment | undefined;
    disabled: boolean | undefined;
    required: boolean | undefined;
    debounce: number | undefined;
    tooltipPlacement: Placement | undefined;
    locator: string | undefined;
    overflowMode: TYCoreLabelOverflowMode | undefined;
}

declare interface IYCoreLabelInternalProps {
    tooltipActive: boolean | undefined;
    wrap: boolean | undefined;
    size: TYCoreLabelSize | undefined;
    variant: TYCoreLabelVariant | undefined;
}

declare interface IYCoreLabelProps extends IYCoreLabelExternalProps, IYCoreLabelInternalProps {
}

/**
 * Свойства компонента Link
 */
declare interface IYCoreLinkExternalProps {
    /**
     * URL ссылки
     */
    href: string | undefined;
    /**
     * Атрибут target для ссылки
     */
    target: TAnchorTarget | undefined;
    /**
     * Иконка слева от текста
     */
    icon: IYCoreIconExternalProps['icon'] | undefined;
    /**
     * Текст ссылки
     */
    text: string | undefined;
    /**
     * Размер текста ссылки
     * @default 'p2-regular'
     */
    size: IYCoreTextExternalProps['size'];
    /**
     * Перенос текста ссылки
     */
    textWrap: boolean | undefined;
}

declare interface IYCoreLinkProps extends IYCoreLinkExternalProps {
}

/**
 * Свойства компонента Loader
 */
export declare interface IYCoreLoaderExternalProps {
    /**
     * Размер индикатора загрузки
     * @default 'small'
     */
    size: TYCoreLoaderSize | undefined;
    /**
     * Вариант индикатора загрузки
     * @default 'black'
     */
    variant: TYCoreLoaderVariant | undefined;
    /**
     * Видим ли индикатор загрузки
     * @default true
     */
    isVisible: boolean | undefined;
}

export declare interface IYCoreLoaderProps extends IYCoreLoaderExternalProps {
}

/**
 * Свойства компонента Modal
 */
declare interface IYCoreModalExternalProps {
    /**
     * Показать модальное окно
     * @default false
     */
    open: boolean | undefined;
    /**
     * Размер модального окна
     * @default 'small'
     */
    size: Extract<TYSizes, 'small' | 'large'> | undefined;
    /**
     * Вариант отображения модального окна
     * @default 'primary'
     */
    variant: `${EYCoreModalVariant}` | undefined;
    /**
     * Ширина модального окна
     */
    width: string | undefined;
    /**
     * Скрыть оверлей
     * @default false
     */
    hideOverlay: boolean | undefined;
    /**
     * Предотвратить закрытие по Escape
     * @default false
     */
    preventEscape: boolean | undefined;
    /**
     * Полноэкранный режим
     * @default false
     */
    fullScreen: boolean | undefined;
    /**
     * Предотвращает скрытие модалки через backdrop/ крестик/ escape (только по клику на CTA button)
     * @default false
     */
    persistent: boolean | undefined;
    /**
     * Показать grabber для закрытия модалки в режиме bottom-sheet
     * @default false
     */
    showGrabber: boolean | undefined;
}

declare interface IYCoreModalProps extends IYCoreModalExternalProps {
}

declare interface IYCoreMultipleSelectFieldExternalProps extends Omit<IYCoreSelectFieldProps_2, 'displayValue'> {
    value: TYCoreSelectFieldItemValue[] | undefined;
    useVirtualScroll: boolean | undefined;
    singleLine: boolean | undefined;
}

declare interface IYCoreMultipleSelectFieldProps extends IYCoreMultipleSelectFieldExternalProps {
}

/**
 * Свойства компонента Pagination
 */
declare interface IYCorePaginationExternalProps {
    /**
     * Текущая страница
     * @default 1
     */
    page: number | undefined;
    /**
     * Количество элементов на странице
     * @default 10
     */
    itemsPerPage: number | undefined;
    /**
     * Общее количество элементов
     * @default 0
     */
    total: number | undefined;
    /**
     * Отключить пагинацию
     * @default false
     */
    disabled: boolean | undefined;
}

declare interface IYCorePaginationInternalProps {
}

declare interface IYCorePaginationProps extends IYCorePaginationExternalProps, IYCorePaginationInternalProps {
}

declare interface IYCorePhoneCodeExternalProps extends Pick<IYCoreFieldWrapperProps, 'disabled' | 'size' | 'readonly'> {
    code: TYCountry['code'] | undefined;
}

declare interface IYCorePhoneCodeProps extends IYCorePhoneCodeExternalProps {
}

declare interface IYCorePhoneFieldExternalProps extends Omit<IYCoreFieldWrapperProps, 'clickable'>, Omit<IYCoreFieldInputProps, 'hideSpaceLeft' | 'hideSpaceRight' | 'disabled' | 'size' | 'readonly' | 'maxlength' | 'type' | 'autocomplete' | 'maskOptions'>, TAddPrefixToObject<Omit<IYCoreLabelExternalProps, 'alignment' | 'disabled' | 'required' | 'overflowMode'>, 'label'>, TAddPrefixToObject<Omit<IYCoreAnnotationExternalProps, 'disabled'>, 'annotation'>, IYCoreErrorExternalProps {
    minSearchLength: number | undefined;
    withoutCodeSelection: boolean | undefined;
    disabledAutocomplete: boolean | undefined;
    searchFunction: ((detail: TYCorePhoneFieldInfoWithMeta) => Promise<TYCorePhoneFieldAutocompleteOption[]> | TYCorePhoneFieldAutocompleteOption[]) | undefined;
    countries: TYCountryMappedById | undefined;
    defaultCountryId: number | undefined;
    optionPhonePrivacyEnabled: boolean | undefined;
    emptyStateTitle: IYCoreEmptyStateExternalProps['title'] | undefined;
    emptyStateDescription: IYCoreEmptyStateExternalProps['description'] | undefined;
    emptyStateIcon: IYCoreEmptyStateExternalProps['icon'] | undefined;
}

/**
 * Свойства компонента Popover
 */
declare interface IYCorePopoverExternalProps extends IYCoreTipExternalProps {
    /**
     * Текст кнопки подтверждения
     */
    submitText: string | undefined;
    /**
     * Текст кнопки отмены
     */
    cancelText: string | undefined;
    /**
     * Отключить попап
     * @default false
     */
    disabled: boolean;
    /**
     * Игнорировать закрытие по нажатию клавиши Esc
     * @default false
     */
    preventEscape: boolean;
    /**
     * Задержка (мс) для триггера hover (проброс в Tip → Dropdown)
     * @default 150 — задаётся в Dropdown: HOVER_VISIBLE_DELAY_MS
     */
    delay: number | undefined;
}

declare interface IYCorePopoverInternalProps extends IYCoreTipInternalProps {
    /* Excluded from this release type: ignoreNativeDropdownEvents */
    /**
     * Middlewares для floating-ui (проброс в Tip → Dropdown)
     */
    middlewares: Middleware[] | undefined;
}

declare interface IYCorePopoverProps extends IYCorePopoverExternalProps, IYCorePopoverInternalProps {
}

/**
 * Свойства компонента RadioButton
 */
declare interface IYCoreRadioButtonExternalProps extends Omit<IYCoreSimpleRadioButtonExternalProps, 'error'>, Omit<IYCoreLabelExternalProps, 'text' | 'tooltipText' | 'tooltipPlacement' | 'disabled' | 'debounce' | 'overflowMode'>, Omit<IYCoreAnnotationExternalProps, 'text' | 'disabled'>, IYCoreErrorExternalProps {
    /**
     * Значение радиокнопки
     */
    value: string | number | boolean | null | undefined;
    /**
     * Текст лейбла
     */
    labelText: IYCoreLabelExternalProps['text'];
    /**
     * Текст подсказки для лейбла
     */
    labelTooltipText: IYCoreLabelExternalProps['tooltipText'];
    /**
     * Направление подсказки для лейбла
     */
    labelTooltipPlacement: IYCoreLabelExternalProps['tooltipPlacement'];
    /**
     * Задержка для определения переполнения текста лейбла
     */
    labelOverflowDebounce: IYCoreLabelExternalProps['debounce'];
    /**
     * Текст аннотации
     */
    annotationText: IYCoreAnnotationExternalProps['text'];
}

declare interface IYCoreRadioButtonGroupExternalProps extends TAddPrefixToObject<Omit<IYCoreLabelExternalProps, 'alignment' | 'disabled' | 'required' | 'overflowMode'>, 'label'> {
    value: IYCoreRadioButtonProps['value'];
    size: IYCoreRadioButtonProps['size'] | undefined;
    alignment: IYCoreRadioButtonProps['alignment'] | undefined;
    direction: TYCoreRadioButtonGroupDirection | undefined;
    labelTooltipActive: boolean | undefined;
}

declare interface IYCoreRadioButtonGroupProps extends IYCoreRadioButtonGroupExternalProps {
}

declare interface IYCoreRadioButtonProps extends IYCoreRadioButtonExternalProps {
}

declare interface IYCoreSearchTextHighlightedExternalProps extends Omit<IYCoreTextExternalProps, 'lineclamp' | 'locator' | 'trackOverflow'> {
    text: string;
    search: string;
    stopHighlight: boolean | undefined;
    caseSensitive: boolean | undefined;
    ignoredSymbols: string[] | undefined;
    highlightTextVariant: IYCoreTextExternalProps['variant'];
}

declare interface IYCoreSearchTextHighlightedProps extends IYCoreSearchTextHighlightedExternalProps {
}

/**
 * Свойства компонента SegmentControl
 */
declare interface IYCoreSegmentControlExternalProps {
    /**
     * Список опций
     * @default []
     */
    options: IYCoreSegmentControlOption[] | undefined;
    /**
     * Размер сегментов
     * @default 'small'
     */
    size: TYCoreSegmentOptionSize | undefined;
    /**
     * Выбранное значение
     */
    value: IYCoreSegmentControlOption['value'] | undefined;
    /**
     * Ручное управление состоянием
     * @default false
     */
    manual: boolean | undefined;
}

declare interface IYCoreSegmentControlOption {
    active: boolean;
    text: string;
    value: string;
    disabled?: boolean;
    icon?: IYIcon;
}

declare interface IYCoreSegmentControlProps extends IYCoreSegmentControlExternalProps {
}

declare interface IYCoreSegmentOptionExternalProps {
    active: boolean | undefined;
    disabled: boolean | undefined;
    icon: IYIcon | undefined;
    locator: string | undefined;
    size: TYCoreSegmentOptionSize | undefined;
    value: string;
}

declare interface IYCoreSegmentOptionInternalProps {
    hovered: boolean | undefined;
}

declare interface IYCoreSegmentOptionProps extends IYCoreSegmentOptionInternalProps, IYCoreSegmentOptionExternalProps {
}

/**
 * Событие выбора элемента в поле выбора
 */
declare interface IYCoreSelectFieldEvents extends IYBaseCustomEvent {
    /**
     * Выбранное значение
     */
    value: IYCoreSelectFieldExternalProps['value'];
    /**
     * Выбранный элемент
     */
    item: IYCoreSelectListItem;
}

declare interface IYCoreSelectFieldEvents_2 {
    value: IYCoreMultipleSelectFieldExternalProps['value'];
}

declare interface IYCoreSelectFieldExternalProps extends IYCoreSelectFieldProps_2 {
    /**
     * Выбранное значение
     */
    value: TYCoreSelectFieldItemValue | undefined;
}

declare interface IYCoreSelectFieldProps extends IYCoreSelectFieldExternalProps {
}

/**
 * Свойства компонента SelectField
 */
declare interface IYCoreSelectFieldProps_2 extends Omit<IYCoreFieldWrapperProps, 'clickable'>, Omit<IYCoreFieldInputProps, 'hideSpaceLeft' | 'hideSpaceRight' | 'disabled' | 'size' | 'readonly' | 'maxlength' | 'type' | 'value' | 'autocomplete'>, TAddPrefixToObject<Omit<IYCoreLabelExternalProps, 'alignment' | 'disabled' | 'required' | 'overflowMode'>, 'label'>, TAddPrefixToObject<Omit<IYCoreAnnotationExternalProps, 'disabled'>, 'annotation'>, IYCoreErrorExternalProps, Omit<IYCoreDropdownListProps, 'selectedItems' | 'minWidth' | 'noMaxHeight' | 'useVirtualScroll'> {
    /**
     * Ключ для получения значения элемента
     */
    itemValue: TItemValue | undefined;
    /**
     * Использовать кастомную фильтрацию
     * @default false
     */
    isCustomFilter: boolean | undefined;
    /**
     * Включить фильтрацию
     * @default false
     */
    isFilterable: boolean | undefined;
    /**
     * Использовать маппинг опций
     */
    isMapOptions: boolean | undefined;
    /**
     * Значение фильтра
     */
    filterValue: string | undefined;
    /**
     * Отображаемое значение для выбранной опции
     */
    displayValue: string | undefined;
    /**
     * Функция фильтрации элементов
     */
    filterCallback: ((items: IYCoreSelectListItem[], filterValue: string) => IYCoreSelectListItem[]) | undefined;
    /**
     * Виртуальный скролл для выпадающего списка
     */
    useVirtualScroll: IYCoreDropdownListProps['useVirtualScroll'];
}

declare interface IYCoreSelectListItem extends IDropdownListItem {
    img?: string;
    icon?: IYIcon;
    initials?: string;
    /** Цвет фона чипа выбранного элемента (любое валидное CSS-значение цвета) */
    chipBackgroundColor?: string;
    /** Цвет текста чипа выбранного элемента */
    chipTextColor?: string;
}

/**
 * Свойства компонента SideMenuItem
 */
declare interface IYCoreSideMenuItemExternalProps {
    /**
     * Текст лейбла
     *
     * @default 'undefined'
     */
    label: string | undefined;
    /**
     * Позиция тултипа при переполнении лейбла
     *
     * @default 'undefined'
     */
    labelTooltipPlacement: IYCoreLabelExternalProps['tooltipPlacement'];
    /**
     * Текст аннотации
     *
     * @default 'undefined'
     */
    annotation: string | undefined;
    /**
     * Иконка элемента меню
     *
     * Отображается слева от заголовка (в развернутом режиме)
     * или как единственный визуальный элемент (в свернутом режиме)
     *
     * @default 'undefined'
     */
    icon: IYIcon | undefined;
    /**
     * Режим отображения элемента меню
     *
     * Доступные значения:
     * - **full**: развернутый режим
     * - **collapse**: свернутый режим
     *
     * @default 'full'
     */
    variant: TYCoreSideMenuItemVariant | undefined;
    /**
     * Флаг активного состояния элемента меню
     *
     * @default false
     */
    isActive: boolean | undefined;
    /**
     * URL ссылки
     *
     * @default 'undefined'
     */
    href: string | undefined;
    /**
     * Атрибут target для ссылки
     *
     * @default 'undefined'
     */
    target: TAnchorTarget | undefined;
    /**
     * Ручное управление открытием пункта меню, если у него есть вложенные элементы
     *
     * @default 'undefined'
     */
    opened: boolean | undefined;
    /**
     * Заблокированное состояние элемента меню
     *
     * Блокирует переход по ссылке, раскрытие вложенных элементов и hover-меню
     * в свернутом режиме, а также визуально приглушает пункт
     *
     * @default false
     */
    disabled: boolean | undefined;
}

declare interface IYCoreSimpleBannerExternalProps {
    description: string;
    primaryButtonText: string;
    primaryButtonVariant: IYCoreButtonProps['variant'];
    stretched: boolean;
    colorText: EYCoreTextVariant | undefined;
    header: string | undefined;
    secondaryButtonText: string | undefined;
    secondaryButtonVariant: IYCoreButtonProps['variant'];
    hideCloseIcon: boolean | undefined;
}

declare interface IYCoreSimpleBannerInternalProps {
    hostStyles: string | undefined;
    descriptionSize: EYCoreTextSize | undefined;
    truncateDescription: boolean | undefined;
}

declare interface IYCoreSimpleBannerProps extends IYCoreSimpleBannerExternalProps, IYCoreSimpleBannerInternalProps {
}

/**
 * Свойства компонента SimpleButton
 */
declare interface IYCoreSimpleButtonExternalProps {
    /**
     * Размер кнопки
     * @default 'small'
     */
    size: Extract<TYSizes, 'small' | 'medium' | 'large'> | undefined;
    /**
     * Вариант отображения кнопки
     * @default 'primary'
     */
    variant: TYCoreSimpleButtonVariant | undefined;
    /**
     * Растянуть кнопку на всю ширину контейнера
     * @default false
     */
    fullWidth: boolean | undefined;
    /**
     * Отключить кнопку
     * @default false
     */
    disabled: boolean | undefined;
    /**
     * Показывать индикатор загрузки
     * @default false
     */
    loading: boolean | undefined;
    /**
     * URL для режима ссылки. Если указан, кнопка рендерится как ссылка
     */
    href: string | undefined;
    /**
     * Атрибут target для ссылки
     */
    target: TAnchorTarget | undefined;
    /**
     * Выравнивание содержимого кнопки
     * @default 'center'
     */
    alignment: TYCoreSimpleButtonContentAlignment | undefined;
}

declare interface IYCoreSimpleButtonInternalProps {
    /**
     * Дополнительные CSS стили для корневого элемента
     */
    hostStyles: string | undefined;
    /**
     * Вариант индикатора загрузки
     * @default 'black'
     */
    loaderVariant: IYCoreLoaderProps['variant'] | undefined;
}

declare interface IYCoreSimpleButtonProps extends IYCoreSimpleButtonExternalProps, IYCoreSimpleButtonInternalProps {
}

declare interface IYCoreSimpleCheckboxExternalProps {
    size: Extract<TYSizes, 'small' | 'medium'> | undefined;
    checked: boolean | undefined;
    indeterminate: boolean | undefined;
    disabled: boolean | undefined;
    error: boolean | undefined;
}

declare interface IYCoreSimpleCheckboxInternalProps {
    hovered: boolean | undefined;
}

declare interface IYCoreSimpleCheckboxProps extends IYCoreSimpleCheckboxExternalProps, IYCoreSimpleCheckboxInternalProps {
}

declare interface IYCoreSimpleChipExternalProps {
    size: TYCoreSimpleChipSize | undefined;
    variant: TYCoreSimpleChipVariant | undefined;
    disabled: boolean | undefined;
    readonly: boolean | undefined;
    /** Кастомный цвет фона чипа (переопределяет вариант) */
    background: string | undefined;
    /** Кастомный цвет текста чипа (переопределяет вариант) */
    color: string | undefined;
}

declare interface IYCoreSimpleChipProps extends IYCoreSimpleChipExternalProps {
}

declare interface IYCoreSimpleRadioButtonExternalProps {
    size: Extract<TYSizes, 'small' | 'medium'> | undefined;
    checked: boolean | undefined;
    disabled: boolean | undefined;
    error: boolean | undefined;
    name: string | undefined;
}

declare interface IYCoreSimpleRadioButtonInternalProps {
    hovered: boolean | undefined;
}

declare interface IYCoreSimpleRadioButtonProps extends IYCoreSimpleRadioButtonExternalProps, IYCoreSimpleRadioButtonInternalProps {
}

declare interface IYCoreSimpleToggleExternalProps {
    checked: boolean | undefined;
    disabled: boolean | undefined;
    size: Extract<TYSizes, 'small' | 'medium'> | undefined;
}

declare interface IYCoreSimpleToggleInternalProps {
    hovered: boolean | undefined;
}

declare interface IYCoreSimpleToggleProps extends IYCoreSimpleToggleInternalProps, IYCoreSimpleToggleExternalProps {
}

export declare interface IYCoreSkeletonExternalProps {
    variant: EYCoreSkeletonVariant;
    width: TCSSValuesAndUnits;
    height: TCSSValuesAndUnits;
}

export declare interface IYCoreSkeletonInternalProps {
}

export declare interface IYCoreSkeletonProps extends IYCoreSkeletonExternalProps, IYCoreSkeletonInternalProps {
}

declare interface IYCoreSkeletonTableExternalProps extends Pick<IYCoreTableProps, 'hideHead' | 'hideBar'>, Pick<IYCoreTableRowProps, 'stripe'> {
    columns: ISkeletonTableColumn[] | undefined;
    rows: number | undefined;
    hasPagination: boolean | undefined;
}

declare interface IYCoreSkeletonTableInternalProps {
}

declare interface IYCoreSkeletonTableProps extends IYCoreSkeletonTableExternalProps, IYCoreSkeletonTableInternalProps {
}

/**
 * Свойства компонента Tab
 */
declare interface IYCoreTabExternalProps extends TAddPrefixToObject<Pick<IYTagExternalProps, 'variant'>, 'tag'>, TAddPrefixToObject<Pick<IYCoreCounterExternalProps, 'value'>, 'counter'> {
    /**
     * Иконка слева
     */
    leftIcon: IYCoreIconExternalProps['icon'] | undefined;
    /**
     * Размер иконки слева
     * @default '16px'
     */
    leftIconSize: IYCoreIconExternalProps['size'];
    /**
     * Текст вкладки
     */
    text: string | undefined;
    /**
     * Активна ли вкладка
     * @default false
     */
    active: boolean | undefined;
    /**
     * Отключить вкладку
     * @default false
     */
    disabled: boolean | undefined;
    /**
     * Показывать тег
     * @default false
     */
    isTagVisible: boolean | undefined;
    /**
     * Текст тега
     */
    tagText: string | undefined;
    /**
     * Показывать счетчик
     * @default false
     */
    isCounterVisible: boolean | undefined;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     */
    locator: string | undefined;
    /**
     * Вспомогательный дата-атрибут для тега
     */
    locatorTag: string | undefined;
    /**
     * Вспомогательный дата-атрибут для счетчика
     */
    locatorCounter: string | undefined;
}

declare interface IYCoreTabInternalProps {
}

declare interface IYCoreTableBarExternalProps {
}

declare interface IYCoreTableBarInternalProps {
}

declare interface IYCoreTableBarProps extends IYCoreTableBarExternalProps, IYCoreTableBarInternalProps {
}

declare interface IYCoreTableCellExternalProps {
    sticky: boolean | undefined;
    align: TTableCellAlign | undefined;
    item: ITableCellItem | undefined;
    itemLabel: keyof ITableCellItem | string | undefined;
    disabled: boolean | undefined;
    ellipsis: boolean | undefined;
    lineclamp: number | undefined;
    bordered: boolean | undefined;
}

declare interface IYCoreTableCellInternalProps {
}

declare interface IYCoreTableCellProps extends IYCoreTableCellExternalProps, IYCoreTableCellInternalProps {
}

declare interface IYCoreTableExternalProps {
    loading: boolean | undefined;
    disabled: boolean | undefined;
    plugins: TTablePluginsContext | undefined;
    hideHead: boolean | undefined;
    hideBar: boolean | undefined;
}

declare interface IYCoreTableHeadCellExternalProps extends Omit<IYCoreTableCellExternalProps, 'item' | 'itemLabel' | 'stripe'> {
    sortable: boolean | undefined;
    sortDirection: TSort | undefined;
    header: ITableHeadCellItem | undefined;
    headerLabel: IYCoreTableCellExternalProps['itemLabel'];
}

declare interface IYCoreTableHeadCellInternalProps {
    /* Excluded from this release type: hasHint */
}

declare interface IYCoreTableHeadCellProps extends IYCoreTableHeadCellExternalProps, IYCoreTableHeadCellInternalProps {
}

declare interface IYCoreTableInternalProps {
}

declare interface IYCoreTablePaginationExternalProps extends IYCorePaginationProps, Pick<IYCoreSelectFieldProps, 'itemValue' | 'itemLabel'> {
    optionsItemsPerPage: number[] | undefined;
    counterText: string | undefined;
}

declare interface IYCoreTablePaginationInternalProps {
}

declare interface IYCoreTablePaginationProps extends IYCoreTablePaginationExternalProps, IYCoreTablePaginationInternalProps {
}

declare interface IYCoreTableProps extends IYCoreTableExternalProps, IYCoreTableInternalProps {
}

declare interface IYCoreTableRowExternalProps {
    stripe: boolean | undefined;
    selectable: boolean | undefined;
    sticky: boolean | undefined;
    disabled: boolean | undefined;
}

declare interface IYCoreTableRowProps extends IYCoreTableRowExternalProps {
}

declare interface IYCoreTabProps extends IYCoreTabExternalProps, IYCoreTabInternalProps {
}

declare interface IYCoreTabsChangeActiveTabEvent {
    value: number;
}

/**
 * Свойства компонента Tabs
 */
declare interface IYCoreTabsExternalProps {
    /**
     * Список вкладок
     * @default []
     */
    tabs: IYCoreTabsItem[] | undefined;
    /**
     * Индекс активной вкладки
     * @default 0
     */
    value: number | undefined;
    /**
     * Растянуть вкладки на всю ширину
     * @default false
     */
    fullWidth: boolean | undefined;
}

declare interface IYCoreTabsInternalProps {
}

declare interface IYCoreTabsItem extends IYCoreTabExternalProps {
}

declare interface IYCoreTabsProps extends IYCoreTabsExternalProps, IYCoreTabsInternalProps {
}

declare interface IYCoreTagInternalProps {
}

declare interface IYCoreTagProps extends IYTagExternalProps, IYCoreTagInternalProps {
}

/**
 * Свойства компонента Textarea
 */
declare interface IYCoreTextareaExternalProps extends Omit<IYCoreTextFieldExternalProps, 'type' | 'maskOptions' | 'annotationText' | 'labelOverflowMode' | 'ellipsis'>, Pick<IYCoreFieldTextareaExternalProps, 'rows' | 'resize' | 'autogrow'> {
}

declare interface IYCoreTextareaInternalProps {
}

declare interface IYCoreTextareaProps extends IYCoreTextareaExternalProps, IYCoreTextareaInternalProps {
}

/**
 * Свойства компонента Text
 */
declare interface IYCoreTextExternalProps {
    /**
     * Размер текста
     * @default 'p2-regular'
     */
    size: TYCoreTextSize | undefined;
    /**
     * Стиль текста
     * @default 'primary'
     */
    variant: TYCoreTextVariant | undefined;
    /**
     * Ограничение длины текста с многоточием
     * @default false
     */
    ellipsis: boolean | undefined;
    /**
     * Количество строк при ограничении длины текста (работает вместе с ellipsis).
     * Если не задан — количество строк определяется CSS-переменной `--y-core-text-line-clamp` (по умолчанию 1).
     * @default undefined
     */
    lineclamp: number | undefined;
    /**
     * Управляет отслеживанием overflow у текста
     * @default false
     */
    trackOverflow: boolean | undefined;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     * @default 'y-core-text'
     */
    locator: string | undefined;
}

/**
 * Свойства компонента TextField
 */
declare interface IYCoreTextFieldExternalProps extends Omit<IYCoreFieldWrapperProps, 'clickable'>, Omit<IYCoreFieldInputProps, 'hideSpaceLeft' | 'hideSpaceRight' | 'disabled' | 'size' | 'readonly' | 'autocomplete' | 'type'>, TAddPrefixToObject<Omit<IYCoreLabelExternalProps, 'alignment' | 'disabled' | 'required'>, 'label'>, TAddPrefixToObject<Omit<IYCoreAnnotationExternalProps, 'disabled'>, 'annotation'>, IYCoreErrorExternalProps {
    /**
     * Возможность очистки поля
     * @default false
     */
    clearable: boolean | undefined;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     */
    locator: string | undefined;
    /**
     * Вспомогательный дата-атрибут для лейбла
     */
    locatorLabel: string | undefined;
    /**
     * Вспомогательный дата-атрибут для ошибки
     */
    locatorError: string | undefined;
    /**
     * Вспомогательный дата-атрибут для иконки очистки
     */
    locatorClearIcon: string | undefined;
    /**
     * Нативный аттрибут поля <input>
     */
    type: TYCoreTextInputType | undefined;
    /**
     * Уводить ли текст в поле в троеточие
     */
    ellipsis: boolean | undefined;
}

declare interface IYCoreTextFieldInternalProps {
}

declare interface IYCoreTextFieldProps extends IYCoreTextFieldExternalProps, IYCoreTextFieldInternalProps {
}

declare interface IYCoreTextProps extends IYCoreTextExternalProps {
}

/**
 * Свойства компонента Tip
 */
declare interface IYCoreTipExternalProps extends IYCoreDropdownExternalProps {
    /**
     * Тип подсказки
     * @default 'invert'
     */
    type: TYCoreTipType | undefined;
    /**
     * Показывать стрелку
     * @default true
     */
    hasArrow: boolean | undefined;
}

declare interface IYCoreTipInternalProps extends Pick<IYCoreDropdownInternalProps, 'middlewares'> {
}

declare interface IYCoreTipProps extends IYCoreTipExternalProps, IYCoreTipInternalProps {
}

declare interface IYCoreToastExternalProps extends TAddPrefixToObject<Pick<IYCoreCounterExternalProps, 'value'>, 'counter'> {
    variant: EYCoreToastType;
    titleText: string | undefined;
    description: string | undefined;
    maxWidth: string | undefined;
}

declare interface IYCoreToastInternalProps {
}

declare interface IYCoreToastProps extends IYCoreToastExternalProps, IYCoreToastInternalProps {
}

/**
 * Событие изменения состояния тогла
 */
export declare interface IYCoreToggleCheckedEvent {
    /**
     * Новое значение тогла
     */
    checked: boolean;
}

/**
 * Свойства компонента Toggle
 */
export declare interface IYCoreToggleExternalProps extends IYCoreSimpleToggleExternalProps, Omit<IYCoreLabelExternalProps, 'text' | 'tooltipText' | 'tooltipPlacement' | 'debounce' | 'required' | 'overflowMode'>, Omit<IYCoreAnnotationExternalProps, 'text'> {
    /**
     * Текст лейбла
     */
    labelText: IYCoreLabelExternalProps['text'];
    /**
     * Текст подсказки для лейбла
     */
    labelTooltipText: IYCoreLabelExternalProps['tooltipText'];
    /**
     * Направление подсказки для лейбла
     */
    labelTooltipPlacement: IYCoreLabelExternalProps['tooltipPlacement'];
    /**
     * Задержка для определения переполнения текста лейбла
     */
    labelOverflowDebounce: IYCoreLabelExternalProps['debounce'];
    /**
     * Текст аннотации
     */
    annotationText: IYCoreAnnotationExternalProps['text'];
}

export declare interface IYCoreToggleProps extends IYCoreToggleExternalProps {
}

/**
 * Свойства компонента Tooltip
 */
declare interface IYCoreTooltipProps {
    /**
     * Текст тултипа
     */
    text: string | undefined;
    /**
     * Отключить тултип
     */
    disabled: IYCoreTipProps['disabled'] | undefined;
    /**
     * Позиция тултипа
     */
    placement: IYCoreDropdownExternalProps['placement'] | undefined;
    /**
     * Тип тултипа
     */
    type: IYCoreTipProps['type'] | undefined;
    /**
     * Условие показа тултипа
     */
    showOnCondition: boolean | undefined;
    /**
     * Время задержки перед показом тултипа
     * @default 150
     */
    delay: number | undefined;
}

export declare interface IYIcon {
    name: TYIcons;
    data: string;
}

export declare type IYIconNameSubset<T extends readonly IYIcon[]> = T[number]['name'];

/**
 * Свойства компонента Tag
 */
declare interface IYTagExternalProps {
    /**
     * Размер тега
     * @default 'medium'
     */
    size: TYCoreTagSize | undefined;
    /**
     * Вариант отображения тега
     * @default 'accent'
     */
    variant: TYCoreTagVariant | undefined;
    /**
     * Иконка слева
     */
    iconLeft: IYIcon | undefined;
    /**
     * Отключить тег
     * @default false
     */
    disabled: boolean | undefined;
    /**
     * Вспомогательный дата-атрибут для реализации BB-тестов
     */
    locator: string | undefined;
    /**
     * Вспомогательный дата-атрибут для метки
     */
    locatorLabel: string | undefined;
    /**
     * Вспомогательный дата-атрибут для иконки
     */
    locatorIcon: string | undefined;
}

/**
 * Событие нажатия клавиши в поле ввода
 */
declare class KeydownEvent extends CustomEvent<IYCoreFieldInputKeydownEvent> {
}

export declare class LoaderHideEvent extends CustomEvent<void> {
}

/**
 * LoaderProxy - прокси для управления множественными вызовами GlobalLoader
 *
 * Контролирует доступ к GlobalLoader, решая, когда реально вызывать show/hide
 *
 * Логика:
 * - show() вызывается у GlobalLoader только при первом вызове (count: 0 → 1)
 * - hide() вызывается у GlobalLoader только при последнем вызове (count: 1 → 0)
 *
 *
 * @example
 * const loader = LoaderProxy.getInstance()
 *
 * // Параллельные запросы
 * loader.show() // count = 1, вызывает GlobalLoader.show()
 * loader.show() // count = 2, НЕ вызывает (уже показан)
 * loader.hide() // count = 1, НЕ вызывает (ещё есть активные)
 * loader.hide() // count = 0, вызывает GlobalLoader.hide()
 */
export declare class LoaderProxy implements Required<ILoader> {
    private static instance;
    private referenceCount;
    private realSubject;
    private constructor();
    /**
     * Получить единственный экземпляр LoaderProxy
     */
    static getInstance(): LoaderProxy;
    /**
     * Инкрементирует счётчик и вызывает realSubject.show() только
     * при первом вызове (когда счётчик переходит от 0 к 1).
     *
     * First-write-wins: опции (size, variant) фиксируются первым вызовом.
     * Повторные вызовы с другими опциями игнорируются пока лоадер активен.
     *
     * @param options - опции лоадера
     */
    show(options?: ILoaderOptions): void;
    /**
     * Декрементирует счётчик и вызывает realSubject.hide() только
     * при последнем вызове (когда счётчик переходит от 1 к 0)
     */
    hide(): void;
    /**
     * Сбрасывает счётчик и вызывает destroy у RealSubject
     */
    destroy(): void;
}

export declare class LoaderShowEvent extends CustomEvent<void> {
}

/**
 * Идентификатор модуля локализации в контексте
 */
export declare const LOCALE_MODULE_ID = "locale";

/**
 * Объект со всеми доступными локализациями
 */
export declare const locales: Record<TLocale, ILocale_2>;

/**
 * Сервис локализации для использования в компонентах
 */
declare class LocaleService {
    private currentLocale;
    /**
     * Создать новый экземпляр сервиса локализации
     * @param initialLocale Начальная локализация
     */
    constructor(initialLocale: ILocale_2);
    /**
     * Получить текущую локализацию
     */
    getLocale(): ILocale_2;
    /**
     * Установить локализацию
     * @param locale Новая локализация
     */
    setLocale(locale: ILocale_2): void;
    /**
     * Форматировать дату согласно указанному формату
     * @param date Дата для форматирования
     * @param format Формат даты
     */
    formatDate(date: Date, format: keyof ILocale_2['formatters']['date']): string;
    /**
     * Форматировать месяц
     * @param date Дата
     * @param format Формат месяца
     */
    formatMonth(date: Date, format?: keyof ILocale_2['formatters']['date']['month']): string;
    /**
     * Форматировать день недели
     * @param date Дата
     * @param format Формат дня недели
     */
    formatWeekday(date: Date, format?: keyof ILocale_2['formatters']['date']['weekday']): string;
    /**
     * Форматировать число
     * @param value Число
     * @param format Формат числа
     */
    formatNumber(value: number, format: keyof ILocale_2['formatters']['number']): string;
    /**
     * Получить дни недели в нужном формате
     * @param format Формат дней недели
     */
    getWeekDays(format?: keyof ILocale_2['formatters']['date']['weekday']): string[];
    /**
     * Получить список месяцев
     * @param format Формат названия месяца
     */
    getMonths(format?: keyof ILocale_2['formatters']['date']['month']): {
        id: string;
        label: string;
    }[];
    /**
     * Получить направление текста
     */
    getDirection(): ILocale_2['dir'];
    /**
     * Получить код языка
     */
    getLanguageCode(): ILocale_2['code'];
    /**
     * Получить первый день недели
     */
    getFirstDayOfWeek(): ILocale_2['formatters']['firstDayOfWeek'];
    /**
     * Получить список стран
     */
    getCountries(): Promise<TYCountryNameMappedById>;
}

/**
 * Базовый класс для компонентов с поддержкой локализации
 *
 * Автоматически подписывается на изменения локали и предоставляет методы для работы с ней
 */
declare class LocalizedElement extends LitElement {
    locale: ILocale_2 | undefined;
    /**
     * Текущая локализация
     */
    protected currentLocale: ILocale_2 | null;
    protected currentLocaleService: LocaleService | null;
    /**
     * Глобальный контекст
     */
    protected globalContext: IGlobalContext;
    /**
     * Текущая дата
     */
    protected currentDate: default_2.Dayjs;
    /**
     * Обработчик для обновления Global Provider
     */
    protected globalContextUpdateHandler: (() => void) | null;
    /**
     * Обработчик для обновления модуля локализации
     */
    protected moduleUpdateHandler: (() => void) | null;
    /**
     * Получить модуль локализации из контекста
     */
    protected getLocaleModule(): ILocaleModule | undefined;
    /**
     * Получить текущую локаль
     */
    protected getLocale(): ILocale_2;
    /**
     * Получить глобальный контекст
     */
    protected getGlobalContext(): IGlobalContext | undefined;
    /**
     * Получить сервис локализации
     */
    protected getLocaleService(): LocaleService | null;
    private updateCurrentDate;
    /**
     * Подписаться на изменения локали
     */
    private subscribeToLocaleChanges;
    /**
     * Обновляет состояние локали и сервиса локализации
     */
    private updateLocaleState;
    /**
     * Обновляет текущую локаль на основе модуля
     */
    private updateLocalFromModule;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Обработка изменения свойства locale
     */
    private handleLocaleChange;
    updated(changedProperties: PropertyValues<this>): void;
    private clearGlobalContextHandler;
    private clearLocaleModuleHandler;
}

declare type MatchTextPosition = {
    startIdx: number;
    endIdx: number;
};

/**
 * Событие переключения года/месяца в календаре
 */
declare class NavigationEvent extends CustomEvent<IYCoreCalendarNavigationEvent> {
}

declare class NavigationEvent_2 extends CustomEvent<IYCoreCalendarNavigationEvent> {
}

/**
 * Событие открытия модального окна
 */
declare class OpenEvent extends CustomEvent<Event> {
}

/**
 * Идентификатор модуля палитры в контексте
 */
export declare const PALETTE_MODULE_ID = "palette";

/**
 * Плагин для управления палитрой в GlobalProvider
 *
 * Использует PaletteModule для хранения данных локализации в глобальном контексте.
 *
 * @example
 * ```typescript
 * // Создание экземпляра плагина с русской локализацией
 * const palettePlugin = new PalettePlugin('#ffcb00', false);
 *
 * // Использование плагина в GlobalProvider
 * <YGlobalProvider :plugins="[palettePlugin]">
 *   <YourComponent />
 * </YGlobalProvider>
 * ```
 */
export declare class PalettePlugin implements Required<IGlobalProviderPlugin> {
    private accentColor;
    private useDarkTheme;
    id: string;
    private paletteModule?;
    private context?;
    /**
     * Создает экземпляр плагина палитры
     *
     * @param accentColor - Основной цвет, используемый для генерации палитры
     * @param useDarkTheme - Флаг для включения тёмной темы
     */
    constructor(accentColor: string, useDarkTheme?: boolean);
    /**
     * Инициализирует палитру в глобальном контексте
     *
     * Создает модуль палитры и добавляет его в глобальный контекст.
     *
     * @param context - Глобальный контекст для установки палитры
     */
    init(context: IGlobalContext): void;
    /**
     * Уничтожает плагин и очищает состояние
     */
    destroy(): void;
}

declare class PhoneFieldChangeEvent extends CustomEvent<TYCorePhoneFieldInfoWithMeta> {
}

declare class PickEvent extends CustomEvent<IYCoreDatePickerPickEvent> {
}

/**
 * Событие нажатия Escape
 */
declare class PressEscapeEvent extends CustomEvent<Event> {
}

declare class PrimaryButtonClickEmitEvent extends CustomEvent<PointerEvent> {
}

/**
 * Плагин для управления модулем очереди в GlobalProvider
 *
 * Этот плагин создает и управляет модулем очереди, который служит
 * точкой доступа к функциональности очередей в приложении.
 * ID плагина используется также как ID для создаваемого модуля.
 */
export declare class QueuePlugin implements Required<IGlobalProviderPlugin> {
    id: string;
    private defaultDelay;
    private context?;
    private queueModule?;
    /**
     * @param config Конфигурация плагина
     */
    constructor(config: IQueuePluginConfig);
    /**
     * Инициализирует плагин и добавляет модуль в контекст
     * @param context Глобальный контекст
     */
    init(context: IGlobalContext): void;
    /**
     * Уничтожает плагин и очищает состояние
     */
    destroy(): void;
    /**
     * Получает модуль очереди
     * @returns Модуль очереди или undefined, если контекст не инициализирован
     */
    getModule(): IQueueModule | undefined;
    /**
     * Устанавливает задержку по умолчанию для модуля
     * @param delay Новая задержка по умолчанию
     */
    setDefaultDelay(delay: number): void;
    /**
     * Получает текущую задержку по умолчанию
     */
    getDefaultDelay(): number;
}

/**
 * Событие окончания выбора диапазона дат
 */
declare class RangeEndEvent extends CustomEvent<IYCoreCalendarRangeEndEvent> {
}

/**
 * Событие начала выбора диапазона дат
 */
declare class RangeStartEvent extends CustomEvent<IYCoreCalendarRangeStartEvent> {
}

/**
 * Событие рендеринга поля ввода
 */
declare class RenderEvent extends CustomEvent<IYBaseCustomEvent> {
}

declare class SecondaryButtonClickEmitEvent extends CustomEvent<PointerEvent> {
}

declare type Segment = {
    value: string;
    highlighted: boolean;
};

/**
 * Событие выбора даты в календаре
 */
declare class SelectEvent extends CustomEvent<IYCoreCalendarSelectEvent> {
}

/**
 * Событие выбора элемента в поле выбора
 */
declare class SelectEvent_2 extends CustomEvent<IYCoreSelectFieldEvents> {
}

declare class SelectEvent_3 extends CustomEvent<IYCoreSelectFieldEvents_2> {
}

declare class SelectOptionEvent extends CustomEvent<TYCorePhoneFieldAutocompleteOption> {
}

/**
 * Событие выбора опции автодополнения
 */
declare class SelectOptionEvent_2 extends CustomEvent<TYCoreAutocompleteFieldAutocompleteOption> {
}

declare class ShowEvent extends CustomEvent<IYCoreDatePickerShowEvent> {
}

declare class SubmitEvent_2 extends CustomEvent<Event> {
}

declare type TAbsoluteLengthUnits = 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt';

declare type TAddPrefixToObject<T, P extends string> = {
    [K in keyof T as K extends string ? `${P}${Capitalize<K>}` : never]: T[K];
};

declare type TAnchorTarget = `${EAnchorTarget}`;

declare type TAnyVoidFunction = (...args: any[]) => void;

declare type TCollapseItemValueMultiple = TCollapseItemValueSingle[];

declare type TCollapseItemValueSingle = IYCoreCollapseItemProps['value'];

declare type TCollapseItemVariant = `${EYCoreCollapseItemVariant}`;

declare type TCSSValuesAndUnits = `${number}${TAbsoluteLengthUnits | TRelativeLengthUnits}` | TStringLengthUnits;

/**
 * Тип направления текста (слева направо или справа налево)
 */
declare type TDirectionType = 'ltr' | 'rtl';

/**
 * A dispatcher function type for custom events.
 *
 * @template E - The CustomEvent type.
 * @param options - The optional initialization options for the custom event.
 */
declare type TDispatcher<E extends CustomEvent> = (options?: CustomEventInit<TEventDetails<E>>) => void;

/**
 * Extracts the details type from a CustomEvent.
 *
 * @template T - The CustomEvent type.
 */
declare type TEventDetails<T extends CustomEvent> = T extends CustomEvent<infer D> ? D : never;

declare type TEventsStoryArgs<T> = {
    [K in keyof T as TExtractEventName<K>]: TAnyVoidFunction;
};

declare type TExtractEventName<T> = T extends `${infer Name}Event` ? `on${Name}` : never;

declare type TEYCoreDropdownTrigger = `${EYCoreDropdownTrigger}`;

declare type TEYGridModes = (typeof EYGridModes)[keyof typeof EYGridModes];

declare type TGlobalContextModule = IQueueModule | ILocaleModule | IPaletteModule;

declare type THandler<T> = (arg?: T) => void;

declare type TItemValue = keyof IYCoreSelectListItem;

declare type TLocale = 'ru-RU' | 'en-US';

/**
 * Интерфейс с текстовыми сообщениями для локализации
 */
declare type TMessages = Record<string, string>;

/**
 * API для работы с очередью тостов
 * Реализует паттерн Facade для удобного использования
 * @class ToastQueue
 */
declare class ToastQueue {
    /** Глобальный контекст, устанавливается при инициализации */
    private context;
    /** ID плагина тостов в контексте */
    private pluginId;
    /** Очередь колбэков, ожидающих инициализации модуля */
    private pendingCallbacks;
    /**
     * Инициализирует ToastQueue с контекстом и ID плагина
     * Вызывается автоматически при установке плагина
     * @param context - Глобальный контекст GlobalProvider
     * @param pluginId - Уникальный ID плагина тостов
     */
    initialize(context: IGlobalContext, pluginId: string): void;
    /**
     * Сбрасывает состояние ToastQueue
     * Вызывается при уничтожении плагина
     */
    reset(): void;
    /**
     * Получает модуль очереди тостов из контекста
     * @private
     * @returns Модуль очереди тостов или undefined, если контекст не инициализирован
     */
    private getModule;
    /**
     * Выполняет действие с модулем, ожидая его установки если необходимо
     * Если модуль еще не установлен, ожидает его инициализации до таймаута (5 секунд)
     * @private
     * @template T - Тип возвращаемого значения
     * @param action - Функция для выполнения с модулем
     * @returns Promise с результатом выполнения действия
     * @throws {ToastsPluginNotInstalledError} Если модуль не установлен за 5 секунд
     */
    private withModule;
    /**
     * Показывает тост с указанными опциями
     * @param options - Опции для отображения тоста (текст, вариант и т.д.)
     * Позиция и длительность задаются в конфигурации плагина
     * @returns Promise с handle тоста для программного управления
     */
    notify(options: IToastOptions): Promise<IToastHandle>;
    /**
     * Показывает успешный тост
     * @param options - Опции для отображения тоста (без указания варианта)
     * @returns Promise с handle тоста для программного управления
     */
    success(options: Omit<IToastOptions, 'variant'>): Promise<IToastHandle>;
    /**
     * Показывает информационный тост
     * @param options - Опции для отображения тоста (без указания варианта)
     * @returns Promise с handle тоста для программного управления
     */
    info(options: Omit<IToastOptions, 'variant'>): Promise<IToastHandle>;
    /**
     * Показывает предупреждающий тост
     * @param options - Опции для отображения тоста (без указания варианта)
     * @returns Promise с handle тоста для программного управления
     */
    warning(options: Omit<IToastOptions, 'variant'>): Promise<IToastHandle>;
    /**
     * Показывает тост с ошибкой
     * @param options - Опции для отображения тоста (без указания варианта)
     * @returns Promise с handle тоста для программного управления
     */
    error(options: Omit<IToastOptions, 'variant'>): Promise<IToastHandle>;
    /**
     * Очищает все активные тосты из очереди
     * @returns Promise, который разрешается после очистки всех тостов
     */
    clearAll(): Promise<void>;
}

/**
 * ToastsPlugin — отдельный плагин GlobalProvider для показа очереди тостов.
 *
 * Отвечает за:
 * - Создание и регистрацию модуля ToastQueueModule в контексте
 * - Инициализацию UI хоста через фабрику
 * - Настройку связи между модулем и хостом
 *
 * Не зависит от конкретной реализации UI хоста (DIP)
 */
export declare class ToastsPlugin implements Required<IGlobalProviderPlugin> {
    id: string;
    readonly toastQueue: ToastQueue;
    private readonly config;
    private toastQueueModule?;
    /**
     * Создает экземпляр плагина тостов
     * @param config - Конфигурация плагина
     */
    constructor(config: IToastsPluginConfig);
    /**
     * Инициализирует плагин и добавляет модуль в контекст
     * @param context Глобальный контекст
     */
    init(context: IGlobalContext): void;
    /**
     * Создает и добавляет хост тостов в DOM
     * @param toastHost - Экземпляр хоста тостов
     * @param hostSelector - Селектор элемента для хоста тостов
     * @private
     */
    private createToastHostAndAppend;
    /**
     * Уничтожает плагин и очищает состояние
     */
    destroy(context?: IGlobalContext): void;
    /**
     * Получает модуль очереди тостов
     * @returns Модуль очереди тостов или undefined, если модуль не инициализирован
     */
    getModule(): IToastQueueModule | undefined;
}

/**
 * Событие изменения состояния тогла
 */
export declare class ToggleCheckedEvent extends CustomEvent<IYCoreToggleCheckedEvent> {
}

declare type TPrimitive = string | number | boolean | null | undefined;

declare type TRelativeLengthUnits = 'em' | 'ex' | 'ch' | 'rem' | 'lh' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';

declare type TSort = `${ESort}`;

declare type TStringLengthUnits = 'max-content' | 'min-content' | 'available' | 'fit-content' | 'auto' | 'inherit' | 'initial' | 'unset';

declare type TTableCellAlign = `${ETableCellAlign}`;

declare type TTablePluginComponents = typeof YCoreTableTagName | typeof YCoreTableBarTagName | typeof YCoreTableRowTagName | typeof YCoreTableCellTagName | typeof YCoreTableHeadCellTagName | typeof YCoreTablePaginationTagName;

declare type TTablePluginHook<T extends TTablePluginComponents> = (component: ITableComponentsMap[T]) => void;

declare type TTablePluginsContext = Partial<Record<TTablePluginComponents, ITablePlugin<TTablePluginComponents>[]>> | undefined;

declare type TTimeout = ReturnType<typeof setTimeout>;

/**
 * Позиция тоста на экране
 */
export declare type TToastQueuePosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

declare type TYAvatarSizes = '20px' | '24px' | '32px' | '40px' | '48px' | '64px' | '80px' | '120px';

declare type TYCalendarDateAvailabilityRule = string[] | ((date: Date) => boolean);

declare type TYCoreAutocompleteFieldAutocompleteOption = {
    id: string | number;
    value?: string;
    additionalInfo?: string[];
    [key: string]: unknown;
};

declare type TYCoreAutocompleteFieldInfo = {
    value: string;
};

declare type TYCoreBannerVariant = `${EYCoreBannerVariant}`;

declare type TYCoreButtonDropdownIconTypes = `${EYCoreButtonDropdownIconTypes}`;

declare type TYCoreButtonGroupVariant = `${EYCoreButtonGroupVariant}`;

declare type TYCoreCalloutVariant = `${EYCoreCalloutVariant}`;

declare type TYCoreCardBasicAlignment = `${EYCoreCardBasicAlignment}`;

declare type TYCoreCheckboxGroupDirection = `${EYCoreCheckboxGroupDirection}`;

export declare type TYCoreChipSize = Extract<TYSizes, 'small' | 'medium' | 'large'>;

export declare type TYCoreChipVariant = `${EYCoreChipVariant}`;

declare type TYCoreCollapseType = `${EYCoreCollapseType}`;

declare type TYCoreColorIconSize = typeof EYCoreColorIconSize[keyof typeof EYCoreColorIconSize];

declare type TYCoreColorIconVariant = `${EYCoreColorIconVariant}`;

declare type TYCoreCounterVariant = `${EYCoreCounterVariant}`;

declare type TYCoreDropdownPositionCallback = (data: ComputePositionReturn) => Promise<ComputePositionReturn>;

declare type TYCoreIconButtonIndicator = IYCoreIconButtonBadgeIndicator | IYCoreIconButtonCounterIndicator;

declare type TYCoreIconButtonVariant = Exclude<IYCoreSimpleButtonExternalProps['variant'], `${EYCoreSimpleButtonVariant.OUTLINE}`>;

declare type TYCoreLabelAlignment = `${EYCoreLabelAlignment}`;

declare type TYCoreLabelOverflowMode = `${EYCoreLabelOverflowMode}`;

declare type TYCoreLabelSize = EYCoreTextSize.A2_REGULAR | EYCoreTextSize.P2_REGULAR;

declare type TYCoreLabelVariant = EYCoreTextVariant.PRIMARY | EYCoreTextVariant.SECONDARY;

export declare type TYCoreLoaderEvents = TEventsStoryArgs<{
    LoaderShowEvent: typeof LoaderShowEvent;
    LoaderHideEvent: typeof LoaderHideEvent;
}>;

export declare type TYCoreLoaderSize = Extract<TYSizes, 'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'>;

export declare type TYCoreLoaderVariant = `${EYCoreLoaderVariant}`;

declare type TYCorePhoneFieldAutocompleteOption = {
    id: string | number;
    title?: string;
    phone?: string;
    additionalPhone?: string;
    email?: string;
    [key: string]: unknown;
};

declare type TYCorePhoneFieldInfoWithMeta = {
    phone: string;
    meta: {
        country: TYCountry | null;
        phoneBody: string;
    };
};

declare type TYCoreRadioButtonGroupDirection = `${EYCoreRadioButtonGroupDirection}`;

declare type TYCoreSegmentOptionSize = Extract<TYSizes, 'small' | 'medium' | 'large'>;

declare type TYCoreSelectFieldItemValue = NonNullable<IYCoreSelectListItem[TItemValue]> | IYCoreSelectListItem | undefined;

declare type TYCoreSideMenuItemVariant = `${EYCoreSideMenuItemVariant}`;

declare type TYCoreSimpleButtonContentAlignment = `${EYCoreSimpleButtonContentAlignment}`;

declare type TYCoreSimpleButtonVariant = `${EYCoreSimpleButtonVariant}`;

declare type TYCoreSimpleChipSize = Extract<EYSizes, 'small' | 'medium'>;

declare type TYCoreSimpleChipVariant = EYCoreSimpleChipVariant;

declare type TYCoreTagSize = Extract<TYSizes, 'small' | 'medium' | 'large'>;

declare type TYCoreTagVariant = `${EYCoreTagVariant}`;

declare type TYCoreTextInputType = Extract<TYInputType, 'text' | 'search' | 'number' | 'password' | 'email' | 'url'>;

declare type TYCoreTextSize = `${EYCoreTextSize}`;

declare type TYCoreTextVariant = `${EYCoreTextVariant}`;

declare type TYCoreTipType = `${EYCoreTipType}`;

export declare type TYCoreToggleEvents = TEventsStoryArgs<{
    CheckedEvent: typeof ToggleCheckedEvent;
}>;

declare type TYCountry = {
    id: number;
    title: string;
    fullTitle: string;
    iso2: string;
    code: string;
    entireCode?: string;
    mask: string;
};

declare type TYCountryMappedById = Record<TYCountry['id'], TYCountry>;

declare type TYCountryName = Pick<TYCountry, 'title' | 'fullTitle'>;

declare type TYCountryNameMappedById = Record<TYCountry['id'], TYCountryName>;

export declare type TYIcons = 'brand_vk_logo' | '3_dots' | 'ai' | 'analytics_pie_chart' | 'analytics' | 'app_store' | 'apple' | 'archive' | 'arrow_down' | 'arrow_left' | 'arrow_right_down_curved' | 'arrow_right_up_curved' | 'arrow_right' | 'arrow_select_field' | 'arrow_tooltip_down' | 'arrow_up_left_curved' | 'arrow_up_right_curved' | 'arrow_up' | 'attach_link' | 'attachment' | 'auto_car' | 'avatar_user' | 'bank' | 'beauty' | 'bell_service' | 'bell' | 'belorussian_ruble' | 'big_arrow_down' | 'big_arrow_left' | 'big_arrow_right' | 'big_arrow_up' | 'big_chevron_down' | 'big_chevron_left' | 'big_chevron_right' | 'big_chevron_up' | 'big_close' | 'big_ruble' | 'bill_check' | 'birthday' | 'blocked_unavailable' | 'bnpl' | 'book_download' | 'book_open' | 'box_goods' | 'boxes' | 'browser_internet_web_site' | 'brush_appearance' | 'building_store' | 'business' | 'calendar_1' | 'calendar_2' | 'calendar_check' | 'calendar_delete' | 'calendar_plus' | 'calendar_schedule_1' | 'calendar_schedule_week_7' | 'calendar_time' | 'car' | 'card_or_cash_split' | 'cards' | 'casa_cash' | 'cell' | 'chat_bubble' | 'chat' | 'check_circle' | 'check' | 'chevron_down' | 'chevron_left' | 'chevron_right' | 'chevron_up' | 'clear_circle_close' | 'clear_filter' | 'client_add' | 'client_service' | 'clients' | 'clock' | 'close' | 'cloud' | 'code_scaner' | 'color' | 'column_chart' | 'column' | 'complex' | 'contact_add' | 'copy' | 'crossed_out_bell' | 'crown' | 'crystal' | 'cup' | 'day' | 'delete' | 'desktop' | 'device_phone' | 'discount_promotion_percent' | 'discount_promotion' | 'document_cancle' | 'documents_file' | 'download_receipe' | 'download' | 'drag_and_drop' | 'drag_n_drop_handle' | 'edit' | 'empty_circle' | 'exit_log_out' | 'expense' | 'eye' | 'file_down_import' | 'file_up_export' | 'fill_form' | 'filter_sort_setting_line' | 'filter_sort_setting_stack' | 'filter_sort_setting' | 'filter' | 'finance_invoice' | 'finances_calculator' | 'fire' | 'folder_closed' | 'folder_group_two_folders' | 'folder_group' | 'folder_move_to' | 'folder_plus_circle' | 'folder' | 'free_user' | 'gift' | 'google_play_icon' | 'google_play' | 'google' | 'hamburger' | 'headphones_support' | 'health' | 'heart_favorite_like' | 'help' | 'hidden_eye' | 'horn_trumpet' | 'house_1' | 'house_2' | 'in_progress' | 'income' | 'info' | 'interface_select_add_plus' | 'kassa' | 'language_translate' | 'laptop' | 'layout' | 'line_chart' | 'link' | 'list_add' | 'list' | 'loader' | 'lock' | 'log_in_2_fa' | 'loyalty_abonement' | 'loyalty_certificate' | 'loyalty_loyalty_card' | 'loyalty_personal_account' | 'loyalty_referral' | 'magic' | 'mail_email_letter_send' | 'mail' | 'map' | 'marker_pin' | 'max' | 'medical_card' | 'message' | 'minus_circle' | 'minus' | 'money_bank' | 'money_card_discount_sale' | 'money_coins_income' | 'money_coins_outcome' | 'money_coins_tips' | 'money_coins' | 'money_sale' | 'move' | 'no_connection' | 'non_cash_payment' | 'note_comment' | 'online_booking_time_clock' | 'other' | 'page_add' | 'passport' | 'pause' | 'payment_card_send' | 'payment_card' | 'payments_finance' | 'payments' | 'phone_incomming' | 'phone' | 'picture_upload_photo' | 'pin_filled' | 'pin_map' | 'pin' | 'play' | 'plus' | 'print' | 'profile' | 'progress_arrow' | 'puzzle' | 'qr_code' | 'question' | 'quote_circle' | 'quote' | 'read' | 'recent' | 'repeat' | 'replay' | 'reset' | 'rocket' | 'rotate_image' | 'ruble' | 'salary_money_pay' | 'save_download' | 'search_cross' | 'search_favorite' | 'search' | 'send' | 'serch_cross' | 'servers_database' | 'servers' | 'settings' | 'share' | 'shield_check' | 'shield_warning' | 'shop_integration' | 'shopping_cart_basket' | 'smile' | 'snow' | 'sort_default' | 'sound_off' | 'sound_on' | 'spinner' | 'star_filled' | 'star' | 'status' | 'support_contact' | 'support' | 'table_dynamic' | 'table_static' | 'tag' | 'telegram' | 'text_bold' | 'text_h_1' | 'text_italic' | 'text_strikethrough' | 'text_underline' | 'throbber' | 'time_add_clock' | 'time_block' | 'time_edit' | 'trash' | 'triangle_plus' | 'triangle' | 'two_arrows_transfer' | 'umbrella' | 'unlink_attachment' | 'unlock' | 'upload' | 'user_add' | 'user_delete' | 'user_discount_sale' | 'user_to_user' | 'vertical_dots' | 'vk' | 'volume_full' | 'volume_mute' | 'wallet' | 'warning_alert' | 'warning' | 'weather_climate_moon' | 'weather_climate_sun' | 'whats_app' | 'work_case' | 'work' | 'ybox' | 'zoom_in_out' | 'zoom_in' | 'zoom_out';

export declare const TYIcons: {
    brand_vk_logo: TYIcons;
    '3_dots': TYIcons;
    ai: TYIcons;
    analytics_pie_chart: TYIcons;
    analytics: TYIcons;
    app_store: TYIcons;
    apple: TYIcons;
    archive: TYIcons;
    arrow_down: TYIcons;
    arrow_left: TYIcons;
    arrow_right_down_curved: TYIcons;
    arrow_right_up_curved: TYIcons;
    arrow_right: TYIcons;
    arrow_select_field: TYIcons;
    arrow_tooltip_down: TYIcons;
    arrow_up_left_curved: TYIcons;
    arrow_up_right_curved: TYIcons;
    arrow_up: TYIcons;
    attach_link: TYIcons;
    attachment: TYIcons;
    auto_car: TYIcons;
    avatar_user: TYIcons;
    bank: TYIcons;
    beauty: TYIcons;
    bell_service: TYIcons;
    bell: TYIcons;
    belorussian_ruble: TYIcons;
    big_arrow_down: TYIcons;
    big_arrow_left: TYIcons;
    big_arrow_right: TYIcons;
    big_arrow_up: TYIcons;
    big_chevron_down: TYIcons;
    big_chevron_left: TYIcons;
    big_chevron_right: TYIcons;
    big_chevron_up: TYIcons;
    big_close: TYIcons;
    big_ruble: TYIcons;
    bill_check: TYIcons;
    birthday: TYIcons;
    blocked_unavailable: TYIcons;
    bnpl: TYIcons;
    book_download: TYIcons;
    book_open: TYIcons;
    box_goods: TYIcons;
    boxes: TYIcons;
    browser_internet_web_site: TYIcons;
    brush_appearance: TYIcons;
    building_store: TYIcons;
    business: TYIcons;
    calendar_1: TYIcons;
    calendar_2: TYIcons;
    calendar_check: TYIcons;
    calendar_delete: TYIcons;
    calendar_plus: TYIcons;
    calendar_schedule_1: TYIcons;
    calendar_schedule_week_7: TYIcons;
    calendar_time: TYIcons;
    car: TYIcons;
    card_or_cash_split: TYIcons;
    cards: TYIcons;
    casa_cash: TYIcons;
    cell: TYIcons;
    chat_bubble: TYIcons;
    chat: TYIcons;
    check_circle: TYIcons;
    check: TYIcons;
    chevron_down: TYIcons;
    chevron_left: TYIcons;
    chevron_right: TYIcons;
    chevron_up: TYIcons;
    clear_circle_close: TYIcons;
    clear_filter: TYIcons;
    client_add: TYIcons;
    client_service: TYIcons;
    clients: TYIcons;
    clock: TYIcons;
    close: TYIcons;
    cloud: TYIcons;
    code_scaner: TYIcons;
    color: TYIcons;
    column_chart: TYIcons;
    column: TYIcons;
    complex: TYIcons;
    contact_add: TYIcons;
    copy: TYIcons;
    crossed_out_bell: TYIcons;
    crown: TYIcons;
    crystal: TYIcons;
    cup: TYIcons;
    day: TYIcons;
    delete: TYIcons;
    desktop: TYIcons;
    device_phone: TYIcons;
    discount_promotion_percent: TYIcons;
    discount_promotion: TYIcons;
    document_cancle: TYIcons;
    documents_file: TYIcons;
    download_receipe: TYIcons;
    download: TYIcons;
    drag_and_drop: TYIcons;
    drag_n_drop_handle: TYIcons;
    edit: TYIcons;
    empty_circle: TYIcons;
    exit_log_out: TYIcons;
    expense: TYIcons;
    eye: TYIcons;
    file_down_import: TYIcons;
    file_up_export: TYIcons;
    fill_form: TYIcons;
    filter_sort_setting_line: TYIcons;
    filter_sort_setting_stack: TYIcons;
    filter_sort_setting: TYIcons;
    filter: TYIcons;
    finance_invoice: TYIcons;
    finances_calculator: TYIcons;
    fire: TYIcons;
    folder_closed: TYIcons;
    folder_group_two_folders: TYIcons;
    folder_group: TYIcons;
    folder_move_to: TYIcons;
    folder_plus_circle: TYIcons;
    folder: TYIcons;
    free_user: TYIcons;
    gift: TYIcons;
    google_play_icon: TYIcons;
    google_play: TYIcons;
    google: TYIcons;
    hamburger: TYIcons;
    headphones_support: TYIcons;
    health: TYIcons;
    heart_favorite_like: TYIcons;
    help: TYIcons;
    hidden_eye: TYIcons;
    horn_trumpet: TYIcons;
    house_1: TYIcons;
    house_2: TYIcons;
    in_progress: TYIcons;
    income: TYIcons;
    info: TYIcons;
    interface_select_add_plus: TYIcons;
    kassa: TYIcons;
    language_translate: TYIcons;
    laptop: TYIcons;
    layout: TYIcons;
    line_chart: TYIcons;
    link: TYIcons;
    list_add: TYIcons;
    list: TYIcons;
    loader: TYIcons;
    lock: TYIcons;
    log_in_2_fa: TYIcons;
    loyalty_abonement: TYIcons;
    loyalty_certificate: TYIcons;
    loyalty_loyalty_card: TYIcons;
    loyalty_personal_account: TYIcons;
    loyalty_referral: TYIcons;
    magic: TYIcons;
    mail_email_letter_send: TYIcons;
    mail: TYIcons;
    map: TYIcons;
    marker_pin: TYIcons;
    max: TYIcons;
    medical_card: TYIcons;
    message: TYIcons;
    minus_circle: TYIcons;
    minus: TYIcons;
    money_bank: TYIcons;
    money_card_discount_sale: TYIcons;
    money_coins_income: TYIcons;
    money_coins_outcome: TYIcons;
    money_coins_tips: TYIcons;
    money_coins: TYIcons;
    money_sale: TYIcons;
    move: TYIcons;
    no_connection: TYIcons;
    non_cash_payment: TYIcons;
    note_comment: TYIcons;
    online_booking_time_clock: TYIcons;
    other: TYIcons;
    page_add: TYIcons;
    passport: TYIcons;
    pause: TYIcons;
    payment_card_send: TYIcons;
    payment_card: TYIcons;
    payments_finance: TYIcons;
    payments: TYIcons;
    phone_incomming: TYIcons;
    phone: TYIcons;
    picture_upload_photo: TYIcons;
    pin_filled: TYIcons;
    pin_map: TYIcons;
    pin: TYIcons;
    play: TYIcons;
    plus: TYIcons;
    print: TYIcons;
    profile: TYIcons;
    progress_arrow: TYIcons;
    puzzle: TYIcons;
    qr_code: TYIcons;
    question: TYIcons;
    quote_circle: TYIcons;
    quote: TYIcons;
    read: TYIcons;
    recent: TYIcons;
    repeat: TYIcons;
    replay: TYIcons;
    reset: TYIcons;
    rocket: TYIcons;
    rotate_image: TYIcons;
    ruble: TYIcons;
    salary_money_pay: TYIcons;
    save_download: TYIcons;
    search_cross: TYIcons;
    search_favorite: TYIcons;
    search: TYIcons;
    send: TYIcons;
    serch_cross: TYIcons;
    servers_database: TYIcons;
    servers: TYIcons;
    settings: TYIcons;
    share: TYIcons;
    shield_check: TYIcons;
    shield_warning: TYIcons;
    shop_integration: TYIcons;
    shopping_cart_basket: TYIcons;
    smile: TYIcons;
    snow: TYIcons;
    sort_default: TYIcons;
    sound_off: TYIcons;
    sound_on: TYIcons;
    spinner: TYIcons;
    star_filled: TYIcons;
    star: TYIcons;
    status: TYIcons;
    support_contact: TYIcons;
    support: TYIcons;
    table_dynamic: TYIcons;
    table_static: TYIcons;
    tag: TYIcons;
    telegram: TYIcons;
    text_bold: TYIcons;
    text_h_1: TYIcons;
    text_italic: TYIcons;
    text_strikethrough: TYIcons;
    text_underline: TYIcons;
    throbber: TYIcons;
    time_add_clock: TYIcons;
    time_block: TYIcons;
    time_edit: TYIcons;
    trash: TYIcons;
    triangle_plus: TYIcons;
    triangle: TYIcons;
    two_arrows_transfer: TYIcons;
    umbrella: TYIcons;
    unlink_attachment: TYIcons;
    unlock: TYIcons;
    upload: TYIcons;
    user_add: TYIcons;
    user_delete: TYIcons;
    user_discount_sale: TYIcons;
    user_to_user: TYIcons;
    vertical_dots: TYIcons;
    vk: TYIcons;
    volume_full: TYIcons;
    volume_mute: TYIcons;
    wallet: TYIcons;
    warning_alert: TYIcons;
    warning: TYIcons;
    weather_climate_moon: TYIcons;
    weather_climate_sun: TYIcons;
    whats_app: TYIcons;
    work_case: TYIcons;
    work: TYIcons;
    ybox: TYIcons;
    zoom_in_out: TYIcons;
    zoom_in: TYIcons;
    zoom_out: TYIcons;
};

declare type TYInputAutocomplete = `${EYInputAutocomplete}`;

declare type TYInputType = `${EYInputType}`;

declare type TYSizes = `${EYSizes}`;

declare type TYTextareaResize = `${EYTextareaResize}`;

/**
 * Уничтожает все переданные плагины
 *
 * Последовательно вызывает метод `destroy` для каждого плагина из массива, если метод определен.
 * Используется внутри GlobalProvider при удалении или замене плагинов.
 *
 * @param plugins - Массив плагинов для уничтожения
 * @param context - Глобальный контекст для передачи в плагины
 */
export declare function uninstallPlugins(plugins: IGlobalProviderPlugin[] | undefined, context: IGlobalContext): void;

export declare const y3Dots: {
    name: '3_dots';
    data: string;
};

export declare const yAi: {
    name: 'ai';
    data: string;
};

export declare const yAnalytics: {
    name: 'analytics';
    data: string;
};

export declare const yAnalyticsPieChart: {
    name: 'analytics_pie_chart';
    data: string;
};

export declare const yApple: {
    name: 'apple';
    data: string;
};

export declare const yAppStore: {
    name: 'app_store';
    data: string;
};

export declare const yArchive: {
    name: 'archive';
    data: string;
};

export declare const yArrowDown: {
    name: 'arrow_down';
    data: string;
};

export declare const yArrowLeft: {
    name: 'arrow_left';
    data: string;
};

export declare const yArrowRight: {
    name: 'arrow_right';
    data: string;
};

export declare const yArrowRightDownCurved: {
    name: 'arrow_right_down_curved';
    data: string;
};

export declare const yArrowRightUpCurved: {
    name: 'arrow_right_up_curved';
    data: string;
};

export declare const yArrowSelectField: {
    name: 'arrow_select_field';
    data: string;
};

export declare const yArrowTooltipDown: {
    name: 'arrow_tooltip_down';
    data: string;
};

export declare const yArrowUp: {
    name: 'arrow_up';
    data: string;
};

export declare const yArrowUpLeftCurved: {
    name: 'arrow_up_left_curved';
    data: string;
};

export declare const yArrowUpRightCurved: {
    name: 'arrow_up_right_curved';
    data: string;
};

export declare const yAttachLink: {
    name: 'attach_link';
    data: string;
};

export declare const yAttachment: {
    name: 'attachment';
    data: string;
};

export declare const yAutoCar: {
    name: 'auto_car';
    data: string;
};

export declare const yAvatarUser: {
    name: 'avatar_user';
    data: string;
};

export declare const yBank: {
    name: 'bank';
    data: string;
};

export declare const yBeauty: {
    name: 'beauty';
    data: string;
};

export declare const yBell: {
    name: 'bell';
    data: string;
};

export declare const yBellService: {
    name: 'bell_service';
    data: string;
};

export declare const yBelorussianRuble: {
    name: 'belorussian_ruble';
    data: string;
};

export declare const yBigArrowDown: {
    name: 'big_arrow_down';
    data: string;
};

export declare const yBigArrowLeft: {
    name: 'big_arrow_left';
    data: string;
};

export declare const yBigArrowRight: {
    name: 'big_arrow_right';
    data: string;
};

export declare const yBigArrowUp: {
    name: 'big_arrow_up';
    data: string;
};

export declare const yBigChevronDown: {
    name: 'big_chevron_down';
    data: string;
};

export declare const yBigChevronLeft: {
    name: 'big_chevron_left';
    data: string;
};

export declare const yBigChevronRight: {
    name: 'big_chevron_right';
    data: string;
};

export declare const yBigChevronUp: {
    name: 'big_chevron_up';
    data: string;
};

export declare const yBigClose: {
    name: 'big_close';
    data: string;
};

export declare const yBigRuble: {
    name: 'big_ruble';
    data: string;
};

export declare const yBillCheck: {
    name: 'bill_check';
    data: string;
};

export declare const yBirthday: {
    name: 'birthday';
    data: string;
};

export declare const yBlockedUnavailable: {
    name: 'blocked_unavailable';
    data: string;
};

export declare const yBnpl: {
    name: 'bnpl';
    data: string;
};

export declare const yBookDownload: {
    name: 'book_download';
    data: string;
};

export declare const yBookOpen: {
    name: 'book_open';
    data: string;
};

export declare const yBoxes: {
    name: 'boxes';
    data: string;
};

export declare const yBoxGoods: {
    name: 'box_goods';
    data: string;
};

export declare const yBrandVkLogo: {
    name: 'brand_vk_logo';
    data: string;
};

export declare const yBrowserInternetWebSite: {
    name: 'browser_internet_web_site';
    data: string;
};

export declare const yBrushAppearance: {
    name: 'brush_appearance';
    data: string;
};

export declare const yBuildingStore: {
    name: 'building_store';
    data: string;
};

export declare const yBusiness: {
    name: 'business';
    data: string;
};

export declare const yCalendar1: {
    name: 'calendar_1';
    data: string;
};

export declare const yCalendar2: {
    name: 'calendar_2';
    data: string;
};

export declare const yCalendarCheck: {
    name: 'calendar_check';
    data: string;
};

export declare const yCalendarDelete: {
    name: 'calendar_delete';
    data: string;
};

export declare const yCalendarPlus: {
    name: 'calendar_plus';
    data: string;
};

export declare const yCalendarSchedule1: {
    name: 'calendar_schedule_1';
    data: string;
};

export declare const yCalendarScheduleWeek7: {
    name: 'calendar_schedule_week_7';
    data: string;
};

export declare const yCalendarTime: {
    name: 'calendar_time';
    data: string;
};

export declare const yCar: {
    name: 'car';
    data: string;
};

export declare const yCardOrCashSplit: {
    name: 'card_or_cash_split';
    data: string;
};

export declare const yCards: {
    name: 'cards';
    data: string;
};

export declare const yCasaCash: {
    name: 'casa_cash';
    data: string;
};

export declare const yCell: {
    name: 'cell';
    data: string;
};

export declare const yChat: {
    name: 'chat';
    data: string;
};

export declare const yChatBubble: {
    name: 'chat_bubble';
    data: string;
};

export declare const yCheck: {
    name: 'check';
    data: string;
};

export declare const yCheckCircle: {
    name: 'check_circle';
    data: string;
};

export declare const yChevronDown: {
    name: 'chevron_down';
    data: string;
};

export declare const yChevronLeft: {
    name: 'chevron_left';
    data: string;
};

export declare const yChevronRight: {
    name: 'chevron_right';
    data: string;
};

export declare const yChevronUp: {
    name: 'chevron_up';
    data: string;
};

export declare const yClearCircleClose: {
    name: 'clear_circle_close';
    data: string;
};

export declare const yClearFilter: {
    name: 'clear_filter';
    data: string;
};

export declare const yClientAdd: {
    name: 'client_add';
    data: string;
};

export declare const yClients: {
    name: 'clients';
    data: string;
};

export declare const yClientService: {
    name: 'client_service';
    data: string;
};

export declare const yClock: {
    name: 'clock';
    data: string;
};

export declare const yClose: {
    name: 'close';
    data: string;
};

export declare const yCloud: {
    name: 'cloud';
    data: string;
};

export declare const yCodeScaner: {
    name: 'code_scaner';
    data: string;
};

export declare const yColor: {
    name: 'color';
    data: string;
};

export declare const yColumn: {
    name: 'column';
    data: string;
};

export declare const yColumnChart: {
    name: 'column_chart';
    data: string;
};

export declare const yComplex: {
    name: 'complex';
    data: string;
};

export declare const yContactAdd: {
    name: 'contact_add';
    data: string;
};

export declare const yCopy: {
    name: 'copy';
    data: string;
};

export declare class YCoreAnnotation extends LitElement implements Required<IYCoreAnnotationProps> {
    text: IYCoreAnnotationProps['text'];
    disabled: IYCoreAnnotationProps['disabled'];
    static readonly styles: CSSResult[];
    private readonly baseClass;
    private get computedClasses();
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreAutocompleteField extends LitElement implements Required<IYCoreAutocompleteFieldExternalProps> {
    disabled: IYCoreAutocompleteFieldExternalProps['disabled'];
    readonly: IYCoreAutocompleteFieldExternalProps['readonly'];
    error: IYCoreAutocompleteFieldExternalProps['error'];
    size: IYCoreAutocompleteFieldExternalProps['size'];
    value: IYCoreAutocompleteFieldExternalProps['value'];
    name: IYCoreAutocompleteFieldExternalProps['name'];
    placeholder: IYCoreAutocompleteFieldExternalProps['placeholder'];
    autofocus: NonNullable<IYCoreAutocompleteFieldExternalProps['autofocus']>;
    required: IYCoreAutocompleteFieldExternalProps['required'];
    errors: IYCoreAutocompleteFieldExternalProps['errors'];
    labelText: IYCoreAutocompleteFieldExternalProps['labelText'];
    labelDebounce: IYCoreAutocompleteFieldExternalProps['labelDebounce'];
    labelTooltipText: IYCoreAutocompleteFieldExternalProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreAutocompleteFieldExternalProps['labelTooltipPlacement'];
    annotationText: IYCoreAutocompleteFieldExternalProps['annotationText'];
    minSearchLength: IYCoreAutocompleteFieldExternalProps['minSearchLength'];
    disabledAutocomplete: IYCoreAutocompleteFieldExternalProps['disabledAutocomplete'];
    emptyStateTitle: IYCoreAutocompleteFieldExternalProps['emptyStateTitle'];
    emptyStateDescription: IYCoreAutocompleteFieldExternalProps['emptyStateDescription'];
    emptyStateIcon: IYCoreAutocompleteFieldExternalProps['emptyStateIcon'];
    highlightResult: IYCoreAutocompleteFieldExternalProps['highlightResult'];
    ellipsis: IYCoreAutocompleteFieldExternalProps['ellipsis'];
    maskOptions: IYCoreAutocompleteFieldExternalProps['maskOptions'];
    labelLocator: IYCoreAutocompleteFieldExternalProps['labelLocator'];
    locator: IYCoreAutocompleteFieldExternalProps['locator'];
    searchFunction: IYCoreAutocompleteFieldExternalProps['searchFunction'];
    _focus: TDispatcher<FocusEvent_5>;
    _blur: TDispatcher<BlurEvent_4>;
    _selectOption: TDispatcher<SelectOptionEvent_2>;
    _change: TDispatcher<ChangeEvent>;
    readonly fieldInput?: YCoreFieldInput;
    private isOpened;
    private autocompleteOptions;
    private loadingAutocompleteOptions;
    private currentSearchRequestId;
    private hasAnnotationSlot;
    private hasIconSlot;
    private focusedIndex;
    private readonly baseClass;
    private readonly baseDropdownActivatorClass;
    private readonly baseDropdownContentClass;
    private readonly baseDropdownListItemClass;
    private readonly baseDropdownListItemsClass;
    private readonly baseDropdownListItemLoader;
    private readonly baseDropdownListItemText;
    static readonly styles: CSSResult[];
    focus(): void;
    blur(): void;
    connectedCallback(): void;
    private get computedDisabledOrReadonly();
    private get isDropdownOpened();
    private get dropdownMiddlewares();
    private handleClickOutside;
    private get computedClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    private get computedDropdownListItemsClasses();
    private get computedFieldWrapperClasses();
    private get hasAnnotation();
    private get isClearButtonVisible();
    private get isEmptyStateAvailable();
    private handleFocus;
    private handleBlur;
    private handleDropdownMouseDown;
    private handleSearchComplete;
    private loadAutocompleteOptions;
    private makeSearch;
    private handleInput;
    changeDropdownVisible: (value: boolean) => void;
    private handleSelectAutocompleteOption;
    private handleEscapeKey;
    private handleNavigationKeyDown;
    private handleDropdownOpened;
    private handleDropdownClosed;
    private tryScroll;
    private getDropdownItemElementByIndex;
    private handleArrowNext;
    private handleArrowPrev;
    private handleSelectFocusedItem;
    private handleClear;
    private handleSlotAnnotationChange;
    private handleSlotIconChange;
    private handleLabelClick;
    protected renderDropdownActivator(): TemplateResult<1>;
    protected renderDropdownListExtraSubtitles(option: TYCoreAutocompleteFieldAutocompleteOption): ( TemplateResult<1> | typeof nothing)[];
    protected renderDropdownList(): unknown;
    private renderEmptyState;
    private renderLoader;
    protected renderDropdownContent(): TemplateResult<1>;
    protected render(): TemplateResult<1>;
}

export declare class YCoreAvatar extends LitElement implements Required<IYCoreAvatarExternalProps> {
    legacySize?: Extract<TYSizes, 'small' | 'medium' | 'large'>;
    size: IYCoreAvatarExternalProps['size'];
    initials: IYCoreAvatarExternalProps['initials'];
    photo: IYCoreAvatarExternalProps['photo'];
    icon: IYCoreAvatarExternalProps['icon'];
    disabled: IYCoreAvatarExternalProps['disabled'];
    color: IYCoreAvatarExternalProps['color'];
    private readonly baseClass;
    imageError: boolean;
    private get isPhoto();
    /**
     * Преобразует строку с именем пользователя в инициалы.
     *
     * @example
     * "Иван" -> "И"
     * "Иван Петров" -> "ИП"
     * "иван петров" -> "ИП"
     * "  Иван  Петров  " -> "ИП"
     * "" -> ""
     *
     * @returns {string} Инициалы пользователя в верхнем регистре.
     * Возвращает пустую строку, если this.initials не определено.
     * Для одного слова возвращает только первую букву.
     * Для нескольких слов берет первые буквы первых двух слов.
     */
    private get initialsFromString();
    static readonly styles: CSSResult[];
    private handleImageError;
    private get computedClasses();
    private get effectiveSize();
    private get iconSize();
    private get content();
    private renderPhoto;
    private renderIcon;
    private renderInitials;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreBadge extends LitElement implements Required<IYCoreBadgeProps> {
    private readonly baseClass;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreBanner extends LitElement implements Required<IYCoreBannerProps> {
    description: IYCoreBannerProps['description'];
    variant: IYCoreBannerProps['variant'];
    primaryButtonText: IYCoreBannerProps['primaryButtonText'];
    open: IYCoreBannerProps['open'];
    hideCloseIcon: IYCoreBannerProps['hideCloseIcon'];
    private hasMediaSlot;
    private hasActionsSlot;
    _close: TDispatcher<CloseEmitEvent>;
    _primaryButtonClick: TDispatcher<PrimaryButtonClickEmitEvent>;
    private readonly baseClass;
    connectedCallback(): void;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get shouldRenderMediaSlot();
    private get shouldRenderIcon();
    private get shouldRenderActionsSlot();
    private renderIcon;
    private handleMediaSlotChange;
    private handleActionsSlotChange;
    private handleClose;
    private handlePrimaryButtonClick;
    protected render(): TemplateResult<1> | typeof nothing;
}

export declare class YCoreBrandButton extends LitElement implements Required<IYCoreBrandButtonProps> {
    variant: IYCoreBrandButtonProps['variant'];
    size: IYCoreBrandButtonProps['size'];
    disabled: IYCoreBrandButtonProps['disabled'];
    loading: IYCoreBrandButtonProps['loading'];
    fullWidth: IYCoreBrandButtonProps['fullWidth'];
    text: IYCoreBrandButtonProps['text'];
    locator: IYCoreBrandButtonProps['locator'];
    connectedCallback(): void;
    render(): TemplateResult<1>;
    static readonly styles: CSSResult[];
}

export declare class YCoreButton extends LitElement implements Required<IYCoreButtonProps> {
    size: IYCoreButtonProps['size'];
    variant: IYCoreButtonProps['variant'];
    disabled: IYCoreButtonProps['disabled'];
    loading: IYCoreButtonProps['loading'];
    label: IYCoreButtonProps['label'];
    href: IYCoreButtonProps['href'];
    target: IYCoreButtonProps['target'];
    alignment: IYCoreButtonProps['alignment'];
    iconLeft: IYCoreButtonProps['iconLeft'];
    iconRight: IYCoreButtonProps['iconRight'];
    fullWidth: IYCoreButtonProps['fullWidth'];
    locator: IYCoreButtonProps['locator'];
    private readonly baseClass;
    private get computedClasses();
    private get computedTextClassName();
    private get computedIconSize();
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    static readonly styles: CSSResult[];
}

export declare class YCoreButtonDropdown extends LitElement implements Required<IYCoreButtonDropdownProps> {
    disabled: IYCoreButtonDropdownProps['disabled'];
    loading: IYCoreButtonDropdownProps['loading'];
    fullWidth: IYCoreButtonDropdownProps['fullWidth'];
    isOpen: IYCoreButtonDropdownProps['isOpen'];
    autoClose: IYCoreButtonDropdownProps['autoClose'];
    variant: IYCoreButtonDropdownProps['variant'];
    size: IYCoreButtonDropdownProps['size'];
    label: IYCoreButtonDropdownProps['label'];
    alignment: IYCoreButtonDropdownProps['alignment'];
    placement: IYCoreButtonDropdownProps['placement'];
    iconType: IYCoreButtonDropdownProps['iconType'];
    items: IYCoreButtonDropdownProps['items'];
    noMaxHeight: IYCoreButtonDropdownProps['noMaxHeight'];
    private isDropdownOpened;
    private focusedIndex;
    private _isPointerDownInsideDropdown;
    private dynamicPlacement;
    private _itemClick;
    private _visible;
    private readonly baseClass;
    private readonly baseDropdownClass;
    private readonly offsetOptions;
    static readonly styles: CSSResult[];
    private get computedIconsSet();
    private get computedClasses();
    private get computedPlacement();
    private get computedMiddlewares();
    protected updated(changedProperties: PropertyValues): void;
    /** Сброс состояния без события (напр. при синхронизации с change-visible из y-core-dropdown). */
    private resetDropdownState;
    /** Закрытие из логики хоста (выбор пункта, blur, Escape и т.д.) — с notify слушателям. */
    private closeDropdown;
    private handleItemClick;
    private handleDropdownContentClick;
    private handleClickOutside;
    private handleChangeVisible;
    private handleDropdownPointerDown;
    private handleBlur;
    private handleNavigationKeyDown;
    private handleDropdownOpened;
    private handleDropdownClosed;
    private tryScroll;
    private getDropdownItemElementByIndex;
    private handleArrowNext;
    private handleArrowPrev;
    private handleSelectFocusedItem;
    private updateDynamicPlacement;
    private handleOpenIntentMouseDown;
    private handleOpenIntentKeyDown;
    protected renderDropdownList(): unknown;
    protected renderDropdownContent(): TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreButtonGroup extends LitElement implements Required<IYCoreButtonGroupProps> {
    private slotNodes;
    size: IYCoreButtonGroupProps['size'];
    variant: IYCoreButtonGroupProps['variant'];
    private buttons;
    private readonly baseClass;
    private get computedClasses();
    connectedCallback(): void;
    updated(changedProperties: Map<string | number | symbol, unknown>): void;
    private updateSlotNodes;
    private updateElementProps;
    private updateSlotProps;
    protected render(): TemplateResult;
    static readonly styles: CSSResult[];
}

export declare class YCoreCalendar extends LocalizedElement implements Required<IYCoreCalendarProps> {
    date: IYCoreCalendarProps['date'];
    disabled: IYCoreCalendarProps['disabled'];
    isRange: IYCoreCalendarProps['isRange'];
    isSelectedRangeReadOnly: IYCoreCalendarProps['isSelectedRangeReadOnly'];
    uniformDatesColor: IYCoreCalendarProps['uniformDatesColor'];
    minDate: IYCoreCalendarProps['minDate'];
    maxDate: IYCoreCalendarProps['maxDate'];
    headerSelectors: IYCoreCalendarProps['headerSelectors'];
    allowEmptyYear: IYCoreCalendarProps['allowEmptyYear'];
    emptyYearFormat: IYCoreCalendarProps['emptyYearFormat'];
    gridMode: IYCoreCalendarProps['gridMode'];
    size: IYCoreCalendarProps['size'];
    availableDates: IYCoreCalendarProps['availableDates'];
    disabledDates: IYCoreCalendarProps['disabledDates'];
    checkedDates: IYCoreCalendarProps['checkedDates'];
    disabledDatesTooltipText: IYCoreCalendarProps['disabledDatesTooltipText'];
    getTooltipTextForDate: IYCoreCalendarProps['getTooltipTextForDate'];
    private isMonthDropdownVisible;
    private isYearDropdownVisible;
    private isYearOmitted;
    private gridModeState;
    private monthDropdown?;
    private yearDropdown?;
    private touchStartX;
    private touchStartY;
    private swipeDirection;
    private readonly swipeThreshold;
    private readonly swipeDirectionThreshold;
    private readonly animationTime;
    private readonly animationCurve;
    private isAnimating;
    private cachedCellHeight;
    private cachedRowGap;
    private resizeObserver?;
    private availableDatesMap;
    private disabledDatesMap;
    private checkedDatesMap;
    _disabledDateClick: TDispatcher<SelectEvent>;
    _select: TDispatcher<SelectEvent>;
    _rangeStart: TDispatcher<RangeStartEvent>;
    _rangeEnd: TDispatcher<RangeEndEvent>;
    _gridModeChanged: TDispatcher<GridModeChangedEvent>;
    _navigation: TDispatcher<NavigationEvent>;
    private readonly baseClass;
    private get textSize();
    private get yearButtonLabel();
    private get computedMinDate();
    private get computedMaxDate();
    private get effectiveMinDate();
    private get effectiveMaxDate();
    private get minNavigationDate();
    private get isDisabledPrevButton();
    private get isDisabledNextButton();
    private handleNavigation;
    private clampToInterval;
    private get isEmptyYearAllowed();
    private get isDateWithoutYearMode();
    private get yearsList();
    private get gridModeWithDefault();
    private get gridClasses();
    private clearConstraintsDatesMapByProp;
    private getMonthKeyForMap;
    /**
     * Заполняет мапу доступных или недоступных дат по ключу MM.YYYY из массива дат
     * @param dates
     * @param propName
     * @private
     */
    private fillConstraintsDatesMapByPropFromArray;
    /**
     * Заполняет пошагово мапу доступных или недоступных дат по ключу MM.YYYY если
     * передана функция для валидации
     * @param propName
     * @param monthDelta
     * @private
     */
    private fillConstraintsDatesMapByPropWithFunction;
    private fillAvailableDates;
    private fillDisabledDates;
    private fillCheckedDates;
    private fillAllConstraintsMapsWithFunction;
    private navigateTo;
    private handleMonthSelect;
    private handleYearSelect;
    private handleMonthDropdownClick;
    private handleYearDropdownClick;
    private handleMonthDropdownVisibleChange;
    private handleYearDropdownVisibleChange;
    private dateIsBeforeThenMinDate;
    private dateIsAfterThenMaxDate;
    private isNoNeedCheckForAvailable;
    private isAvailableDate;
    private isCheckedDate;
    private isDateDisabled;
    private isDateInReadonlySelectedRange;
    private getRangeClasses;
    /**
     * Сдвигает дату на интервал. В режиме без года фиксирует опорный (високосный) год,
     * чтобы сетка не уезжала из високосного года при переходе через его границу
     */
    private addDate;
    private changeMonth;
    private changeWeek;
    private toPrevMonthOrWeek;
    private toPrevMonthOrWeekWithAnimation;
    private toNextMonthOrWeek;
    private toNextMonthOrWeekWithAnimation;
    private checkRangeDateValidity;
    private handleSelectedRangeClick;
    private handleRangeClick;
    private handleDayClick;
    private getGridSlider;
    private getGridWrapper;
    private getCellHeight;
    private getRowGap;
    /**
     * Сравнивает выбранную дату без года с переданной только по месяцу и дню
     */
    private isDateWithoutYearSelected;
    private isDateSelected;
    /**
     * Неотмеченная дата при заданных checkedDates: приглушается цветом
     * как недоступная, но остаётся кликабельной
     */
    private isUncheckedDate;
    private get rootClasses();
    /**
     * Вариант текста даты. uniformDatesColor: доступные даты всегда основным
     * цветом (и в соседних месяцах), недоступные и неотмеченные — вторичным
     * (tertiary на датах почти не читался)
     */
    private getDayTextVariant;
    private getCalendarDayDataWithClasses;
    private animateModeChange;
    private cacheGridDimensions;
    /**
     * Fallback для расчёта высоты, когда элемент ещё не отрисован (getComputedStyle возвращает пустые значения).
     * Должны соответствовать Calendar.vars.css: --y-core-calendar-grid-row-height и --y-core-calendar-grid-row-gap.
     */
    private static readonly FALLBACK_ROW_HEIGHT;
    private static readonly FALLBACK_ROW_GAP;
    private calculateGridHeight;
    private setGridsHeight;
    private applyGridWrapperHeight;
    private setGridWrapperMaxHeight;
    private updateGridWrapperHeight;
    private prepareGridWrapperForAnimation;
    private finalizeGridWrapperAnimation;
    private handleSwipeComplete;
    private animateTransition;
    private handleTouchStart;
    private determineSwipeDirection;
    private applyHorizontalSwipeTransform;
    private handleTouchMove;
    private resetGridSliderTransform;
    private handleTouchEnd;
    private resolveEmptyYearBaseDate;
    private tryApplyEmptyYearDate;
    private handleDatePropChange;
    private syncDateOnPropChange;
    /**
     * Режим без года выключился, но дата всё ещё хранится без года —
     * её нужно разрешить (опорный високосный год — внутренняя деталь и наружу попадать не должен).
     * Конфликт с isRange отдельно гасит validateEmptyYearWithRange, поэтому здесь смотрим только на allowEmptyYear
     */
    private shouldHandleAllowEmptyYearPropChange;
    /**
     * При отключении allowEmptyYear подставляет текущий год в выбранную дату без года
     * (06-15 → 15.06.<текущий год>) и эмитит её полным значением
     */
    private handleAllowEmptyYearPropChange;
    private handleGridModeChange;
    updateDate(value: IYCoreCalendarProps['date']): void;
    resetDropdowns(): void;
    protected getTooltipText(date: string | Dayjs): string | undefined;
    private applyEmptyYearWithRangeConflict;
    private validateEmptyYearWithRange;
    private hasEmptyYearRelevantChange;
    private isEmptyYearDateValid;
    private validateEmptyYearDateFormat;
    private refillConstraintsDatesOnChange;
    protected willUpdate(changedProperties: PropertyValues): void;
    updated(changedProperties: PropertyValues<this>): void;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected renderHeaderSelectors(): TemplateResult<1>;
    protected renderHeaderText(): TemplateResult<1>;
    protected renderHeaderDate(): TemplateResult<1>;
    protected renderGridHeader(): typeof nothing | TemplateResult<1>[];
    protected renderMonthDays(delta: number): unknown;
    protected renderWeekDays(delta: number): unknown;
    protected renderDay(dayData: IMonthDayData, isDayVisible: boolean): TemplateResult<1>;
    protected renderGridDays(delta: number): TemplateResult<1>;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCallout extends LitElement implements Required<IYCoreCalloutProps> {
    description: IYCoreCalloutProps['description'];
    header: IYCoreCalloutProps['header'];
    primaryButtonVariant: IYCoreCalloutProps['primaryButtonVariant'];
    primaryButtonText: IYCoreCalloutProps['primaryButtonText'];
    secondaryButtonVariant: IYCoreCalloutProps['secondaryButtonVariant'];
    secondaryButtonText: IYCoreCalloutProps['secondaryButtonText'];
    variant: IYCoreCalloutProps['variant'];
    hideCloseIcon: IYCoreCalloutProps['hideCloseIcon'];
    hideMedia: IYCoreCalloutProps['hideMedia'];
    open: IYCoreCalloutProps['open'];
    private hasMediaSlot;
    private hasDescriptionSlot;
    _close: TDispatcher<CloseEmitEvent>;
    _primaryButtonClick: TDispatcher<PrimaryButtonClickEmitEvent>;
    _secondaryButtonClick: TDispatcher<SecondaryButtonClickEmitEvent>;
    private readonly baseClass;
    connectedCallback(): void;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get shouldRenderMediaSlot();
    private get shouldRenderDescriptionSlot();
    private get shouldRenderIcon();
    private renderIcon;
    private handleMediaSlotChange;
    private handleDescriptionSlotChange;
    private handleClose;
    private handlePrimaryButtonClick;
    private handleSecondaryButtonClick;
    protected render(): TemplateResult<1> | typeof nothing;
}

export declare class YCoreCardBasic extends LitElement implements Required<IYCoreCardBasicProps> {
    padding: IYCoreCardBasicProps['padding'];
    alignment: IYCoreCardBasicProps['alignment'];
    titleSize: IYCoreCardBasicProps['titleSize'];
    titleText: IYCoreCardBasicProps['titleText'];
    annotationText: IYCoreCardBasicProps['annotationText'];
    subheadText: IYCoreCardBasicProps['subheadText'];
    size: IYCoreCardBasicProps['size'];
    chevron: IYCoreCardBasicProps['chevron'];
    removable: IYCoreCardBasicProps['removable'];
    hoverable: IYCoreCardBasicProps['hoverable'];
    selected: IYCoreCardBasicProps['selected'];
    private hasLeftSideSlot;
    private hasRightSideSlot;
    private _remove;
    private _cardClick;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get leftSideClasses();
    private get titleClasses();
    private get rightSideClasses();
    private get computedTitleSize();
    private get computedAnnotationSize();
    private handleRemove;
    private handleLeftSideSlotChange;
    private handleRightSideSlotChange;
    private handleRightSideClick;
    private handleCardClick;
    connectedCallback(): void;
    private renderSubhead;
    private renderTitleContent;
    private renderAnnotation;
    private renderRemoveIconButton;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardButton extends LitElement implements Required<IYCoreCardButtonProps> {
    disabled: IYCoreCardButtonProps['disabled'];
    hoverable: IYCoreCardButtonProps['hoverable'];
    focusable: IYCoreCardButtonProps['focusable'];
    size: IYCoreCardButtonProps['size'];
    headerText: IYCoreCardButtonProps['headerText'];
    tagText: IYCoreCardButtonProps['tagText'];
    tagVariant: IYCoreCardButtonProps['tagVariant'];
    headerIcon: IYCoreCardButtonProps['headerIcon'];
    annotation: IYCoreCardButtonProps['annotation'];
    private readonly baseClass;
    private hasBeforeSlot;
    private hasAnnotationSlot;
    private _focus;
    private _blur;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSize();
    private get computedAnnotationSize();
    private get computedAnnotationVariant();
    private get computedAfterIconSize();
    private get hasAnnotationContent();
    private handleSlotBeforeChange;
    private handleSlotAnnotationChange;
    private handleFocus;
    private handleBlur;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardCheckbox extends LitElement implements Required<IYCoreCardCheckboxProps> {
    disabled: IYCoreCardCheckboxProps['disabled'];
    size: IYCoreCardCheckboxProps['size'];
    checked: IYCoreCardCheckboxProps['checked'];
    private hovered;
    private _checked;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSize();
    private get computedCheckboxSize();
    private handleChecked;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardHeader extends LitElement implements Required<IYCoreCardHeaderProps> {
    disabled: IYCoreCardHeaderProps['disabled'];
    size: IYCoreCardHeaderProps['size'];
    headerText: IYCoreCardHeaderProps['headerText'];
    tagText: IYCoreCardHeaderProps['tagText'];
    tagVariant: IYCoreCardHeaderProps['tagVariant'];
    headerIcon: IYCoreCardHeaderProps['headerIcon'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSize();
    private get computedTextSize();
    private get computedTextVariant();
    private get computedTagSize();
    protected renderCardTitle(): TemplateResult<1> | typeof nothing;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardIcon extends LitElement implements Required<IYCoreCardIconProps> {
    icon: IYCoreCardIconProps['icon'];
    size: IYCoreCardIconProps['size'];
    variant: IYCoreCardIconProps['variant'];
    disabled: IYCoreCardIconProps['disabled'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSize();
    private get computedIconSize();
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardMain extends LitElement implements Required<IYCoreCardMainProps> {
    disabled: IYCoreCardMainProps['disabled'];
    size: IYCoreCardMainProps['size'];
    hideSpaceLeft: IYCoreCardMainProps['hideSpaceLeft'];
    hideSpaceRight: IYCoreCardMainProps['hideSpaceRight'];
    hasAnnotation: IYCoreCardMainProps['hasAnnotation'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardRadio extends LitElement implements Required<IYCoreCardRadioProps> {
    disabled: IYCoreCardRadioProps['disabled'];
    size: IYCoreCardRadioProps['size'];
    checked: IYCoreCardRadioProps['checked'];
    private hovered;
    private _checked;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSize();
    private get computedRadioSize();
    private handleChecked;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardSelect extends LitElement implements Required<IYCoreCardSelectProps> {
    checked: IYCoreCardSelectProps['checked'];
    disabled: IYCoreCardSelectProps['disabled'];
    hoverable: IYCoreCardSelectProps['hoverable'];
    focusable: IYCoreCardSelectProps['focusable'];
    size: IYCoreCardSelectProps['size'];
    headerText: IYCoreCardSelectProps['headerText'];
    tagText: IYCoreCardSelectProps['tagText'];
    tagVariant: IYCoreCardSelectProps['tagVariant'];
    headerIcon: IYCoreCardSelectProps['headerIcon'];
    annotation: IYCoreCardSelectProps['annotation'];
    hideAfterSlot: IYCoreCardSelectProps['hideAfterSlot'];
    private readonly baseClass;
    private hasBeforeSlot;
    private hasAfterSlot;
    private hasAnnotationSlot;
    private _focus;
    private _blur;
    private _click;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSize();
    private get computedAnnotationSize();
    private get computedAnnotationVariant();
    private handleSlotBeforeChange;
    private handleSlotAfterChange;
    private handleFocus;
    private handleBlur;
    private handleClick;
    private get computedTabIndex();
    private get hasAnnotationContent();
    private handleSlotAnnotationChange;
    protected renderCardAnnotation(): TemplateResult<1>;
    private renderAfterSlot;
    connectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardSimpleIcon extends LitElement implements Required<IYCoreCardSimpleIconProps> {
    icon: IYCoreCardSimpleIconProps['icon'];
    size: IYCoreCardSimpleIconProps['size'];
    private get computedSize();
    private get computedIconSize();
    static readonly styles: CSSResult;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCardWrapper extends LitElement implements Required<IYCoreCardWrapperProps> {
    checked: IYCoreCardWrapperProps['checked'];
    disabled: IYCoreCardWrapperProps['disabled'];
    hoverable: IYCoreCardWrapperProps['hoverable'];
    focusable: IYCoreCardWrapperProps['focusable'];
    size: IYCoreCardWrapperProps['size'];
    private hovered;
    private focused;
    private _focus;
    private _blur;
    readonly divElement?: HTMLDivElement;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private handleFocus;
    private handleBlur;
    private handleMouseEnter;
    private handleMouseLeave;
    private get computedTabIndex();
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCheckbox extends LitElement implements Required<IYCoreCheckboxProps> {
    size: IYCoreCheckboxProps['size'];
    checked: IYCoreCheckboxProps['checked'];
    indeterminate: IYCoreCheckboxProps['indeterminate'];
    disabled: IYCoreCheckboxProps['disabled'];
    alignment: IYCoreCheckboxProps['alignment'];
    labelText: IYCoreCheckboxProps['labelText'];
    labelTooltipText: IYCoreCheckboxProps['labelTooltipText'];
    required: IYCoreCheckboxProps['required'];
    annotationText: IYCoreCheckboxProps['annotationText'];
    labelOverflowDebounce: IYCoreCheckboxProps['labelOverflowDebounce'];
    errors: IYCoreCheckboxProps['errors'];
    error: IYCoreCheckboxProps['error'];
    labelTooltipPlacement: IYCoreCheckboxProps['labelTooltipPlacement'];
    locator: IYCoreCheckboxProps['locator'];
    private _checked;
    private readonly baseClass;
    private readonly baseLabelClass;
    private readonly baseAnnotationClass;
    private readonly baseInfoClass;
    private readonly baseErrorClass;
    private hasAnnotationSlot;
    private hasLabelSlot;
    private hasChildrenSlot;
    private isHovered;
    private get checkboxClasses();
    private get computedInfoClasses();
    private get computedErrorClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    static readonly styles: CSSResult[];
    private handleSlotAnnotationChange;
    private handleSlotLabelChange;
    private handleSlotChildrenChange;
    private handleClick;
    private handleChecked;
    private handleMouseEnter;
    private handleMouseLeave;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCheckboxGroup extends LitElement implements Required<IYCoreCheckboxGroupProps> {
    direction: IYCoreCheckboxGroupProps['direction'];
    labelText: IYCoreCheckboxGroupProps['labelText'];
    labelAlignment: IYCoreCheckboxGroupProps['labelAlignment'];
    labelOverflowDebounce: IYCoreCheckboxGroupProps['labelOverflowDebounce'];
    labelTooltipText: IYCoreCheckboxGroupProps['labelTooltipText'];
    labelTooltipActive: IYCoreCheckboxGroupProps['labelTooltipActive'];
    labelTooltipPlacement: IYCoreCheckboxGroupProps['labelTooltipPlacement'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedLabelClasses();
    private get computedWrapperClasses();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreChip extends LitElement implements Required<IYCoreChipProps> {
    labelText: IYCoreChipProps['labelText'];
    iconLeft: IYCoreChipProps['iconLeft'];
    iconRight: IYCoreChipProps['iconRight'];
    size: IYCoreChipProps['size'];
    variant: IYCoreChipProps['variant'];
    active: IYCoreChipProps['active'];
    disabled: IYCoreChipProps['disabled'];
    locator: IYCoreChipProps['locator'];
    private _iconRightClick;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get textSize();
    private get textVariant();
    private get iconSize();
    protected renderLeftIcon(): TemplateResult<1> | typeof nothing;
    private hasSlottedLeftContent;
    protected renderLeftContent(): TemplateResult<1>;
    private handleLeftSlotChange;
    private handleIconRightClick;
    protected renderRightIcon(): TemplateResult<1> | typeof nothing;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCollapse extends LitElement implements Required<IYCoreCollapseProps> {
    value: IYCoreCollapseProps['value'];
    type: IYCoreCollapseProps['type'];
    variant: IYCoreCollapseProps['variant'];
    draggable: IYCoreCollapseProps['draggable'];
    allowCrossLevelMove: IYCoreCollapseProps['allowCrossLevelMove'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private touchDragState;
    _collapseChange: TDispatcher<CollapseChangeEvent>;
    _collapseMove: TDispatcher<CollapseMoveEvent>;
    private get computedClasses();
    private get supportsTouchEvents();
    private setSingleValue;
    private setMultipleValue;
    private scrollToActiveItem;
    private handleCollapseChange;
    private getItemLevel;
    private canMove;
    private insertItem;
    private insertIntoInnerCollapse;
    private moveDraggableItem;
    private prepareDragImage;
    private setDraggingStyles;
    private clearDraggingStyles;
    private findDragHandle;
    private handleDragStart;
    private handleDragEnd;
    private handleDragEnter;
    private getTargetItem;
    private findSourceItem;
    private handleDragLeave;
    private handleDragOver;
    private handleDrop;
    private clearDraggingItem;
    private createDraggableClone;
    private handleTouchStart;
    private handleTouchMove;
    private shouldBlockEvent;
    private blockTouchEvent;
    private clearTouchTimeout;
    private tryActivateDrag;
    private handleTouchDragging;
    private findTargetCollapseItem;
    private itemsAreSiblings;
    private handleTouchEnd;
    private updateTouchDragPosition;
    private resetDragPosition;
    private resetTouchDragState;
    private setTouchDraggindEvents;
    private clearTouchDraggindEvents;
    private disableDragging;
    private clearDragging;
    private setDraggingItem;
    private setDragging;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private convertToMultipleValue;
    private convertToSingleValue;
    private normalizeValueOnTypeChange;
    updated(_changedProperties: PropertyValues<typeof YCoreCollapse>): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCollapseItem extends LitElement implements Required<IYCoreCollapseItemProps> {
    label: IYCoreCollapseItemProps['label'];
    annotation: IYCoreCollapseItemProps['annotation'];
    opened: IYCoreCollapseItemProps['opened'];
    loading: IYCoreCollapseItemProps['loading'];
    value: IYCoreCollapseItemProps['value'];
    spacingSize: IYCoreCollapseItemProps['spacingSize'];
    labelSize: IYCoreCollapseItemProps['labelSize'];
    variant: IYCoreCollapseItemProps['variant'];
    textEllipsis: IYCoreCollapseItemProps['textEllipsis'];
    textLineClamp: IYCoreCollapseItemProps['textLineClamp'];
    lazyMode: IYCoreCollapseItemProps['lazyMode'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    hasBeforeSlot: boolean;
    hasMediaSlot: boolean;
    hasAfterSlot: boolean;
    hasAnnotationSlot: boolean;
    contentHeight: number;
    contentHeightAuto: boolean;
    private isClosingTransition;
    collapseValue: IYCoreCollapseProps['value'];
    collapseType: IYCoreCollapseProps['type'];
    readonly activatorElement?: HTMLDivElement;
    readonly contentElement?: HTMLDivElement;
    readonly contentSlotElement?: HTMLSlotElement;
    _collapseItemClick: TDispatcher<CollapseItemClickEvent>;
    _collapseItemChangeOpened: TDispatcher<CollapseItemChangeOpenedEvent>;
    private resizeObserver?;
    private observedTargets;
    private hasTransitionListener;
    private get computedClasses();
    private get computedActivatorClasses();
    private get computedContentClasses();
    private get contentWrapperClasses();
    private get computedBeforeClasses();
    private get computedMediaClasses();
    private get computedAnnotationClasses();
    private get computedMainClasses();
    private get computedMainWrapperClasses();
    private get computedAfterClasses();
    private get computedIconClasses();
    private get isContentSlotVisible();
    private get textFontSize();
    private handleBeforeSlotChange;
    private handleMediaSlotChange;
    private handleAfterSlotChange;
    private handleAnnotationSlotChange;
    get computedOpened(): boolean;
    private handleActivatorClick;
    private updateContentHeight;
    private animateContentHeightToZero;
    private handleTransitionEnd;
    private observeContent;
    private unobserveContent;
    private observeAssignedElements;
    private changeSlotContent;
    updated(changedProperties: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
}

export declare class YCoreColorIcon extends LitElement implements Required<IYCoreColorIconProps> {
    icon: IYCoreColorIconProps['icon'];
    size: IYCoreColorIconProps['size'];
    variant: IYCoreColorIconProps['variant'];
    disabled: IYCoreColorIconProps['disabled'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSize();
    private get computedIconSize();
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCounter extends LitElement implements Required<IYCoreCounterProps> {
    locator: IYCoreCounterProps['locator'];
    size: IYCoreCounterProps['size'];
    variant: IYCoreCounterProps['variant'];
    disabled: IYCoreCounterProps['disabled'];
    withPlusSign: IYCoreCounterProps['withPlusSign'];
    value: IYCoreCounterProps['value'];
    maxValue: IYCoreCounterProps['maxValue'];
    bordered: IYCoreCounterProps['bordered'];
    private readonly baseClass;
    private readonly minValue;
    private get effectiveMaxValue();
    private get computedClasses();
    private get isOverflowed();
    private get isNegative();
    private get positiveValue();
    private get computedValue();
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreCountField extends LitElement implements Required<IYCoreCountFieldProps> {
    min: IYCoreCountFieldProps['min'];
    max: IYCoreCountFieldProps['max'];
    disabled: IYCoreCountFieldProps['disabled'];
    readonly: IYCoreCountFieldProps['readonly'];
    error: IYCoreCountFieldProps['error'];
    size: IYCoreCountFieldProps['size'];
    value: IYCoreCountFieldProps['value'];
    name: IYCoreCountFieldProps['name'];
    placeholder: IYCoreCountFieldProps['placeholder'];
    required: IYCoreCountFieldProps['required'];
    autofocus: IYCoreCountFieldProps['autofocus'];
    labelText: IYCoreCountFieldProps['labelText'];
    labelTooltipText: IYCoreCountFieldProps['labelTooltipText'];
    labelDebounce: IYCoreCountFieldProps['labelDebounce'];
    annotationText: IYCoreCountFieldProps['annotationText'];
    errors: IYCoreCountFieldProps['errors'];
    ellipsis: IYCoreCountFieldProps['ellipsis'];
    labelLocator: IYCoreCountFieldProps['labelLocator'];
    labelTooltipPlacement: IYCoreCountFieldProps['labelTooltipPlacement'];
    locator: IYCoreCountFieldProps['locator'];
    locatorLabel: IYCoreCountFieldProps['locatorLabel'];
    locatorError: IYCoreCountFieldProps['locatorError'];
    locatorClearIcon: IYCoreCountFieldProps['locatorClearIcon'];
    _changedValue: TDispatcher<ChangedValueEvent>;
    _focus: TDispatcher<FocusEvent_3>;
    _blur: TDispatcher<BlurEvent_2>;
    _keydown: TDispatcher<KeydownEvent>;
    readonly textField?: YCoreTextField;
    private readonly baseClass;
    private readonly NUMBER_VALUE_EMPTY_STATE;
    private readonly VALUE_EMPTY_STATE;
    private readonly VALUE_AUTO_CHANGE_DELAY;
    private readonly VALUE_AUTO_CHANGE_INTERVAL;
    private maskInstance;
    private isButtonPressed;
    private valueAutoChangeProcessId;
    private valueAutoChangeDelayId;
    static readonly styles: CSSResult[];
    focus(): void;
    blur(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get computedClasses();
    private get inputElement();
    private get mask();
    private handleInput;
    private handleFocus;
    private minValueToApplyOnBlur;
    private shouldResetToNumberEmptyOnBlur;
    private applyBlurValueCorrection;
    private handleBlur;
    private handleMinusOnBlur;
    private handleKeydown;
    private handleMouseDown;
    private handleMouseUp;
    private handleMouseLeave;
    private increaseValue;
    private decreaseValue;
    private applyMask;
    private destroyMask;
    private applyInputStyles;
    private handleRenderInput;
    private createBoundariesPostprocessor;
    private isEmpty;
    private isMinus;
    private getBoundedValue;
    private setValue;
    private isMaxThresholdReached;
    private isMinThresholdReached;
    private startAutoChange;
    private stopAutoChange;
    private clearChangeProcess;
    private clearDelayProcess;
    private renderIcon;
    protected render(): TemplateResult<1>;
}

export declare class YCoreDatePicker extends LocalizedElement implements Required<IYCoreDatePickerProps> {
    disabled: IYCoreDatePickerExternalProps['disabled'];
    readonly: IYCoreDatePickerExternalProps['readonly'];
    error: IYCoreDatePickerExternalProps['error'];
    size: IYCoreDatePickerExternalProps['size'];
    date: IYCoreDatePickerExternalProps['date'];
    name: IYCoreDatePickerExternalProps['name'];
    placeholder: IYCoreDatePickerExternalProps['placeholder'];
    required: IYCoreDatePickerExternalProps['required'];
    allowEmptyDate: IYCoreDatePickerExternalProps['allowEmptyDate'];
    allowEmptyYear: IYCoreDatePickerExternalProps['allowEmptyYear'];
    emptyYearFormat: IYCoreDatePickerExternalProps['emptyYearFormat'];
    labelText: IYCoreDatePickerExternalProps['labelText'];
    labelTooltipText: IYCoreDatePickerExternalProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreDatePickerExternalProps['labelTooltipPlacement'];
    labelDebounce: IYCoreDatePickerExternalProps['labelDebounce'];
    annotationText: IYCoreDatePickerExternalProps['annotationText'];
    errors: IYCoreDatePickerExternalProps['errors'];
    labelLocator: IYCoreDatePickerExternalProps['labelLocator'];
    locator: IYCoreDatePickerExternalProps['locator'];
    calendarHeaderSelectors: IYCoreDatePickerExternalProps['calendarHeaderSelectors'];
    minDate: IYCoreDatePickerExternalProps['minDate'];
    maxDate: IYCoreDatePickerExternalProps['maxDate'];
    availableDates: IYCoreDatePickerExternalProps['availableDates'];
    disabledDates: IYCoreDatePickerExternalProps['disabledDates'];
    checkedDates: IYCoreDatePickerExternalProps['checkedDates'];
    disabledDatesTooltipText: IYCoreDatePickerExternalProps['disabledDatesTooltipText'];
    mode: IYCoreDatePickerExternalProps['mode'];
    maskOptions: IYCoreDatePickerExternalProps['maskOptions'];
    ellipsis: IYCoreDatePickerExternalProps['ellipsis'];
    getTooltipTextForDate: IYCoreDatePickerExternalProps['getTooltipTextForDate'];
    private isOpened;
    private hasAnnotationSlot;
    private pickedDate;
    private hasIncompleteRangeInPicked;
    readonly fieldInput?: YCoreFieldInput;
    readonly calendar?: YCoreCalendar;
    _pick: TDispatcher<PickEvent>;
    _show: TDispatcher<ShowEvent>;
    _hide: TDispatcher<HideEvent>;
    _navigation: TDispatcher<NavigationEvent_2>;
    private maskInstance?;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    private get computedFieldWrapperClasses();
    private get hasAnnotation();
    private get isSingleMode();
    /**
     * Режим необязательного года доступен только для одиночной даты.
     */
    private get isEmptyYearAllowed();
    private get computedPlaceholder();
    private get computedMinDate();
    private get computedMaxDate();
    private get fullDateMaskParams();
    private get dayMonthMaskParams();
    private get emptyYearMaskOptions();
    private get fieldMaskOptions();
    private get isEmptyRangeDate();
    private get isEmptySingleDate();
    private get isDeleteIcon();
    private getArrayDateMaskedValue;
    private get maskedValue();
    /**
     * Форматирует одиночную дату для инпута. В режиме без года значение MM-DD
     * показывается как «дд.мм», полная дата — как «дд.мм.гггг».
     */
    private formatSingleDate;
    private handleSlotAnnotationChange;
    private applyMask;
    private destroyMask;
    private updateFieldInputValue;
    private handleCalendarRangeStart;
    private handleCalendarDateSelectSingle;
    private handleCalendarDateSelectRange;
    private handleCalendarDateSelectMixed;
    private handleCalendarDateSelect;
    private handleShow;
    private handleHide;
    private handleNavigation;
    private handleFocus;
    private handleBlur;
    private handleEsc;
    private updateEmptyDate;
    private validateDate;
    private handleRangeInput;
    private handleMixedInput;
    private pickDate;
    private handleSingleInput;
    private handleEmptyYearInput;
    private handleInput;
    private handleIconMouseDown;
    private resetDate;
    private resetMixedDate;
    private handleIconClick;
    private handleCalendarMouseDown;
    private handleLabelClick;
    private handleLabelMouseDown;
    private handleFieldInputRender;
    private handleCancelClick;
    private handleSubmitClick;
    private handleWrapperClickOutside;
    focus(): void;
    blur(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private warnEmptyYearWithNonSingleMode;
    private hasEmptyYearRelevantChange;
    private isEmptyYearDateValid;
    /**
     * В режиме allowEmptyYear предупреждаем, если переданный date не соответствует emptyYearFormat
     * (и не является полной датой) — чтобы причина Invalid Date была видна разработчику с тегом
     * самого DatePicker, а не внутреннего календаря.
     */
    private warnEmptyYearDateFormat;
    protected renderPopoverActivator(): TemplateResult<1>;
    protected renderPopoverContent(): TemplateResult<1>;
    protected renderPopoverActions(): TemplateResult<1> | typeof nothing;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreDropdown extends LitElement implements Required<IYCoreDropdownProps> {
    trigger: IYCoreDropdownProps['trigger'];
    isOpen: IYCoreDropdownProps['isOpen'];
    offset: IYCoreDropdownProps['offset'];
    padding: IYCoreDropdownProps['padding'];
    placement: IYCoreDropdownProps['placement'];
    strategy: IYCoreDropdownProps['strategy'];
    middlewares: IYCoreDropdownProps['middlewares'];
    handlers: IYCoreDropdownProps['handlers'];
    transition: IYCoreDropdownProps['transition'];
    disabled: IYCoreDropdownProps['disabled'];
    inline: IYCoreDropdownProps['inline'];
    strictWidth: IYCoreDropdownProps['strictWidth'];
    delay: IYCoreDropdownProps['delay'];
    private isContentVisible;
    private animation;
    private minContentWidth;
    private maxContentWidth;
    private resizeObserver;
    private _visible;
    private _clickOutside;
    private readonly baseClass;
    private readonly eventListenersList;
    private activator?;
    private content?;
    private cleanup?;
    private delayTimeout?;
    private visibilityTimeout;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedActivatorClasses();
    private get isAnimationInProgress();
    private changeContentVisible;
    private isTriggerType;
    private handleClickOutside;
    private handleActivatorClick;
    private clearVisibilityTimeout;
    private handleMouseEnter;
    private handleMouseLeave;
    private handlePositionCallback;
    private setAnimationAndEnter;
    private get defaultMiddlewares();
    private updatePosition;
    private resetContentWidthConstraints;
    private setStrictContentWidthConstraints;
    private setMinMaxContentWidth;
    private handleResize;
    private handleVisibilityChange;
    private handleTriggerChange;
    private handleManualControl;
    private handleDisabledChange;
    private handleStrictWidthChange;
    private resetComponent;
    updated(changedProperties: Map<string, unknown>): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private get renderActivator();
    private get renderContent();
    close(): void;
    open(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreDropdownCell extends LitElement implements Required<IYCoreDropdownCellProps> {
    locator: IYCoreDropdownCellProps['locator'];
    focused: IYCoreDropdownCellProps['focused'];
    hasLeftSlot: boolean;
    hasRightSlot: boolean;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedLeftContentClasses();
    private get computedRightContentClasses();
    private handleLeftSlotChange;
    private handleRightSlotChange;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreDropdownCellText extends LitElement implements Required<IYCoreDropdownCellTextProps> {
    label: IYCoreDropdownCellTextProps['label'];
    subtitle: IYCoreDropdownCellTextProps['subtitle'];
    subhead: IYCoreDropdownCellTextProps['subhead'];
    private readonly baseClass;
    private readonly baseClassSubtitle;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreDropdownList extends LitElement implements Required<IYCoreDropdownListProps> {
    items: IYCoreDropdownListProps['items'];
    itemLabel: IYCoreDropdownListProps['itemLabel'];
    minWidth: IYCoreDropdownListProps['minWidth'];
    noMaxHeight: IYCoreDropdownListProps['noMaxHeight'];
    useVirtualScroll: IYCoreDropdownListProps['useVirtualScroll'];
    _itemClick: TDispatcher<ItemClickEvent>;
    private readonly baseClass;
    private readonly baseDropdownCellClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedStyles();
    private handleListItemClick;
    private renderListItem;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreEmptyState extends LitElement implements Required<IYCoreEmptyStateExternalProps> {
    title: IYCoreEmptyStateExternalProps['title'];
    description: IYCoreEmptyStateExternalProps['description'];
    size: IYCoreEmptyStateExternalProps['size'];
    icon: IYCoreEmptyStateExternalProps['icon'];
    private hasActionsSlot;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get rootClasses();
    private get actionsClasses();
    private get iconSize();
    private get computedIcon();
    private get titleSize();
    private handleSlotActionsChange;
    private renderTitle;
    private renderDescription;
    private renderContent;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreError extends LitElement implements Required<IYCoreErrorExternalProps> {
    errors: IYCoreErrorExternalProps['errors'];
    locator: IYCoreErrorExternalProps['locator'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private renderErrors;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreFieldAvatar extends LitElement implements Required<IYCoreFieldAvatarProps> {
    disabled: IYCoreFieldAvatarProps['disabled'];
    size: IYCoreFieldAvatarProps['size'];
    photo: IYCoreFieldAvatarProps['photo'];
    initials: IYCoreFieldAvatarProps['initials'];
    icon: IYCoreFieldAvatarProps['icon'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedSize();
    private get computedAvatarSize();
    private get computedClasses();
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreFieldIcon extends LitElement implements Required<IYCoreFieldIconProps> {
    disabled: IYCoreFieldIconProps['disabled'];
    readonly: IYCoreFieldIconProps['readonly'];
    size: IYCoreFieldIconProps['size'];
    icon: IYCoreFieldIconProps['icon'];
    hoverable: IYCoreFieldIconProps['hoverable'];
    clickable: IYCoreFieldIconProps['clickable'];
    locator: IYCoreFieldIconProps['locator'];
    private _contextDisabled?;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedSize();
    private get computedIconSize();
    private get isDisabled();
    private get computedClasses();
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreFieldInput extends LitElement implements Required<IYCoreFieldInputProps> {
    disabled: IYCoreFieldInputProps['disabled'];
    size: IYCoreFieldInputProps['size'];
    readonly: IYCoreFieldInputProps['readonly'];
    value: IYCoreFieldInputProps['value'];
    name: IYCoreFieldInputProps['name'];
    placeholder: IYCoreFieldInputProps['placeholder'];
    type: IYCoreFieldInputProps['type'];
    autocomplete: IYCoreFieldInputProps['autocomplete'];
    maxlength: IYCoreFieldInputProps['maxlength'];
    required: IYCoreFieldInputProps['required'];
    autofocus: IYCoreFieldInputProps['autofocus'];
    hideSpaceLeft: IYCoreFieldInputProps['hideSpaceLeft'];
    hideSpaceRight: IYCoreFieldInputProps['hideSpaceRight'];
    maskOptions: IYCoreFieldInputProps['maskOptions'];
    ellipsis: IYCoreFieldInputProps['ellipsis'];
    readonly inputElement?: HTMLInputElement;
    focused: boolean;
    private maskInstance?;
    private readonlyConsumer;
    _input: TDispatcher<InputEvent_2>;
    _focus: TDispatcher<FocusEvent_2>;
    _blur: TDispatcher<BlurEvent>;
    _keydown: TDispatcher<KeydownEvent>;
    _render: TDispatcher<RenderEvent>;
    private readonly baseClass;
    private isMounted;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedReadonly();
    private get maskedValue();
    private destroyMask;
    private applyMask;
    updateFieldInputValue: (value?: string) => void;
    private handleInput;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    focus(): void;
    blur(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreFieldTextarea extends LitElement implements Required<IYCoreFieldTextareaProps> {
    disabled: IYCoreFieldTextareaProps['disabled'];
    size: IYCoreFieldTextareaProps['size'];
    readonly: IYCoreFieldTextareaProps['readonly'];
    value: IYCoreFieldTextareaProps['value'];
    name: IYCoreFieldTextareaProps['name'];
    placeholder: IYCoreFieldTextareaProps['placeholder'];
    autocomplete: IYCoreFieldTextareaProps['autocomplete'];
    maxlength: IYCoreFieldTextareaProps['maxlength'];
    required: IYCoreFieldTextareaProps['required'];
    autofocus: IYCoreFieldTextareaProps['autofocus'];
    hideSpaceLeft: IYCoreFieldTextareaProps['hideSpaceLeft'];
    hideSpaceRight: IYCoreFieldTextareaProps['hideSpaceRight'];
    rows: IYCoreFieldTextareaProps['rows'];
    resize: IYCoreFieldTextareaProps['resize'];
    autogrow: IYCoreFieldTextareaProps['autogrow'];
    focused: boolean;
    _input: TDispatcher<InputEvent_2>;
    _focus: TDispatcher<FocusEvent_3>;
    _blur: TDispatcher<BlurEvent_2>;
    _keydown: TDispatcher<KeydownEvent>;
    _render: TDispatcher<RenderEvent>;
    readonly textareaElement?: HTMLTextAreaElement;
    private readonly baseClass;
    private adjustHeightAnimationFrameId?;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedMaxlength();
    private handleInput;
    private adjustHeight;
    private requestAdjustHeight;
    private resetHeight;
    private syncHeight;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreFieldWrapper extends LitElement implements Required<IYCoreFieldWrapperProps> {
    disabled: IYCoreFieldWrapperProps['disabled'];
    readonly: IYCoreFieldWrapperProps['readonly'];
    error: IYCoreFieldWrapperProps['error'];
    size: IYCoreFieldWrapperProps['size'];
    clickable: IYCoreFieldWrapperProps['clickable'];
    private hovered;
    private focused;
    private _clickOutside;
    private _focus;
    private _blur;
    private _mouseenter;
    private _mouseleave;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private readonly eventListenersList;
    private get computedClasses();
    private handleFocus;
    private handleBlur;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleClickOutside;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreFunctionalModal extends LocalizedElement implements Required<IYCoreFunctionalModalProps> {
    open: IYCoreFunctionalModalProps['open'];
    size: IYCoreFunctionalModalProps['size'];
    width: IYCoreFunctionalModalProps['width'];
    preventEscape: IYCoreFunctionalModalProps['preventEscape'];
    hideOverlay: IYCoreFunctionalModalProps['hideOverlay'];
    hideFooter: IYCoreFunctionalModalProps['hideFooter'];
    fullScreen: IYCoreFunctionalModalProps['fullScreen'];
    heading: IYCoreFunctionalModalProps['heading'];
    subHeading: IYCoreFunctionalModalProps['subHeading'];
    persistent: IYCoreFunctionalModalProps['persistent'];
    showGrabber: IYCoreFunctionalModalProps['showGrabber'];
    protected _open: TDispatcher<OpenEvent>;
    protected _close: TDispatcher<CloseEvent_2>;
    protected _clickCloseIcon: TDispatcher<ClickCloseIconEvent>;
    protected _clickOutside: TDispatcher<ClickOutsideEvent>;
    protected _clickActivator: TDispatcher<ClickActivatorEvent>;
    protected _pressEscape: TDispatcher<PressEscapeEvent>;
    protected _cancel: TDispatcher<CancelEvent>;
    protected _submit: TDispatcher<SubmitEvent_2>;
    private resizeObserver?;
    private intersectionObserver?;
    private hasContentOverflow;
    private hasScrollAtBottom;
    private hasHeaderSlot;
    private hasContentSlot;
    private content?;
    private contentSentinel?;
    protected get baseClass(): string;
    protected get baseHeaderClass(): string;
    protected get baseContentClass(): string;
    protected get baseContentWrapperClass(): string;
    private get computedHeaderClasses();
    private get computedContentClasses();
    private get computedContentWrapperClasses();
    private get hasHeaderContent();
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private handleResizeOverflow;
    private initResizeObserver;
    private initIntersectionObserver;
    private destroyResizeObserver;
    private destroyIntersectionObserver;
    private handleSlotHeaderChange;
    private handleSlotContentChange;
    private handleCancelClick;
    private handleSubmitClick;
    private handleOpen;
    private handleClose;
    private handleClickCloseIcon;
    private handleClickOutside;
    private handleClickActivator;
    private handlePressEscape;
    protected renderHeader(): TemplateResult;
    protected render(): TemplateResult;
    static readonly styles: CSSResult[];
    scrollToTop(): void;
}

export declare class YCoreGlobalProvider extends LitElement implements Required<IYCoreGlobalProviderProps> {
    plugins: IYCoreGlobalProviderProps['plugins'];
    useDisplayContents: IYCoreGlobalProviderProps['useDisplayContents'];
    readonly globalContext: GlobalContext;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    _ready: TDispatcher<GlobalProviderReadyEvent>;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    workWithPlugins(oldPlugins?: IYCoreGlobalProviderProps['plugins']): void;
    updated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreIcon extends LitElement implements Required<IYCoreIconExternalProps> {
    icon: IYCoreIconExternalProps['icon'];
    size: IYCoreIconExternalProps['size'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreIconButton extends LitElement implements Required<IYCoreIconButtonProps> {
    size: IYCoreIconButtonProps['size'];
    variant: IYCoreIconButtonProps['variant'];
    disabled: IYCoreIconButtonProps['disabled'];
    loading: IYCoreIconButtonProps['loading'];
    active: IYCoreIconButtonProps['active'];
    tooltipText: IYCoreIconButtonProps['tooltipText'];
    tooltipPlacement: IYCoreIconButtonProps['tooltipPlacement'];
    href: IYCoreIconButtonProps['href'];
    target: IYCoreIconButtonProps['target'];
    icon: IYCoreIconButtonProps['icon'];
    fullWidth: IYCoreIconButtonProps['fullWidth'];
    indicator: IYCoreIconButtonProps['indicator'];
    private readonly baseClass;
    private readonly iconWrapperClass;
    private readonly iconClass;
    private readonly counterWrapperClass;
    private static readonly TOOLTIP_SHOW_DELAY_MS;
    private static readonly TOOLTIP_COOLDOWN_MS;
    /**
     * Соглашение по скоупу состояния тултипа:
     *
     * - `this[prop]`                          — состояние данного экземпляра IconButton
     * - `YCoreIconButton[prop]`               — глобальное состояние всех экземпляров IconButton
     * - `YCoreIconButton._activeInstance[prop]` — состояние текущего активного экземпляра IconButton
     */
    /** Глобальный флаг Warm-up: когда `true`, задержка Cold Start не применяется ни для одного экземпляра */
    private static _warmupActive;
    /** Ссылка на экземпляр с активным тултипом — скрывается при переходе курсора на другую кнопку */
    private static _activeInstance;
    /** Глобальный таймер сброса Warm-up: если не было наведения 500 мс, все экземпляры возвращаются к Cold Start */
    private static _cooldownTimer;
    private _tooltipVisible;
    private _showDelayTimer;
    static readonly styles: CSSResult[];
    private resolveIconSize;
    private get computedIconSize();
    private get computedIconClass();
    private get isIndicatorVisible();
    private get isBadgeIndicator();
    private get computedClasses();
    private tryActivateTooltip;
    private showTooltipWarm;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleClick;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    private renderBadge;
    private renderCounter;
    private renderIconContent;
    private renderButton;
    protected render(): TemplateResult;
}

export declare class YCoreLabel extends LitElement implements Required<IYCoreLabelProps> {
    text: IYCoreLabelProps['text'];
    tooltipText: IYCoreLabelProps['tooltipText'];
    tooltipActive: IYCoreLabelProps['tooltipActive'];
    disabled: IYCoreLabelProps['disabled'];
    required: IYCoreLabelProps['required'];
    debounce: IYCoreLabelProps['debounce'];
    wrap: IYCoreLabelProps['wrap'];
    alignment: IYCoreLabelProps['alignment'];
    size: IYCoreLabelProps['size'];
    variant: IYCoreLabelProps['variant'];
    tooltipPlacement: IYCoreLabelProps['tooltipPlacement'];
    locator: IYCoreLabelProps['locator'];
    overflowMode: IYCoreLabelProps['overflowMode'];
    _contentMouseEnter: TDispatcher<ContentMouseEnterEvent>;
    _contentMouseLeave: TDispatcher<ContentMouseLeaveEvent>;
    private isTextOverflowing;
    private hasSlotTooltipContent;
    private contentElement?;
    private readonly baseClass;
    private resizeObserver;
    static readonly styles: CSSResult[];
    private eventListenersList;
    private get computedClasses();
    private get computedTooltipClasses();
    private get hasTooltip();
    private get titleText();
    private checkTextOverflow;
    private debouncedCheckTextOverflow;
    protected updated(changedProperties: PropertyValues<this>): void;
    private handleResize;
    private handleTooltipClick;
    private handleContentMouseEnter;
    private handleContentMouseLeave;
    private handleSlotTooltipContentChange;
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    protected renderTooltipContent(): TemplateResult<1> | typeof nothing;
    protected renderTooltip(): TemplateResult<1>;
    protected render(): TemplateResult<1>;
}

export declare class YCoreLink extends LitElement implements Required<IYCoreLinkProps> {
    href: IYCoreLinkProps['href'];
    target: IYCoreLinkProps['target'];
    icon: IYCoreLinkProps['icon'];
    text: IYCoreLinkProps['text'];
    size: IYCoreLinkProps['size'];
    textWrap: IYCoreLinkProps['textWrap'];
    private hasDefaultSlotContent;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    connectedCallback(): void;
    protected firstUpdated(): void;
    private updateDefaultSlotState;
    private onDefaultSlotChange;
    private renderTextContent;
    protected render(): TemplateResult<1>;
}

export declare class YCoreLoader extends LitElement implements Required<IYCoreLoaderProps> {
    size: IYCoreLoaderProps['size'];
    variant: IYCoreLoaderProps['variant'];
    isVisible: IYCoreLoaderProps['isVisible'];
    private isVisibleLocal;
    private readonly baseClass;
    private showTimer;
    private hideTimer;
    private shownAt;
    _loaderHide: TDispatcher<LoaderHideEvent>;
    _loaderShow: TDispatcher<LoaderShowEvent>;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private show;
    private hide;
    updated(changedProps: Map<string, unknown>): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreModal extends LitElement implements Required<IYCoreModalProps> {
    open: IYCoreModalProps['open'];
    size: IYCoreModalProps['size'];
    variant: IYCoreModalProps['variant'];
    width: IYCoreModalProps['width'];
    preventEscape: IYCoreModalProps['preventEscape'];
    hideOverlay: IYCoreModalProps['hideOverlay'];
    fullScreen: IYCoreModalProps['fullScreen'];
    persistent: IYCoreModalProps['persistent'];
    showGrabber: IYCoreModalProps['showGrabber'];
    protected _open: TDispatcher<OpenEvent>;
    protected _close: TDispatcher<CloseEvent_2>;
    protected _clickCloseIcon: TDispatcher<ClickCloseIconEvent>;
    protected _clickOutside: TDispatcher<ClickOutsideEvent>;
    protected _clickActivator: TDispatcher<ClickActivatorEvent>;
    protected _pressEscape: TDispatcher<PressEscapeEvent>;
    private overlay?;
    private modal?;
    private isOpen;
    private overlayTransition?;
    private bottomSheetTransition?;
    private swipe;
    private readonly breakpoints;
    protected get isBottomSheet(): boolean;
    protected get baseClass(): string;
    protected get computedClasses(): {
        [x: string]: boolean;
    };
    protected get computedStyles(): string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private animateBottomSheetOnEnter;
    private animateOverlayOnEnter;
    private animateBottomSheetOnLeave;
    private animateOverlayOnLeave;
    private openModal;
    private closeModal;
    private handleCloseIconClick;
    private handleBackdropClick;
    private handleActivatorClick;
    private handleKeydown;
    private removeSwipeListeners;
    private startGrabberSwipe;
    private isMostlyVerticalSwipe;
    private getSwipeMinDistance;
    private shouldCloseFromSwipe;
    private handleGrabberPointerDown;
    private handleGrabberPointerMove;
    private handleGrabberPointerUp;
    private handleGrabberPointerCancel;
    protected updated(changedProperties: PropertyValues): void;
    protected renderOverlay(): TemplateResult;
    protected renderModal(): TemplateResult;
    protected get isModalContentVisible(): boolean;
    protected get isModalVisible(): boolean;
    protected get isOverlayVisible(): boolean;
    protected render(): TemplateResult;
    static readonly styles: CSSResult[];
}

export declare class YCoreMultipleSelectField extends LitElement implements Required<IYCoreMultipleSelectFieldProps> {
    disabled: IYCoreMultipleSelectFieldProps['disabled'];
    readonly: IYCoreMultipleSelectFieldProps['readonly'];
    error: IYCoreMultipleSelectFieldProps['error'];
    size: IYCoreMultipleSelectFieldProps['size'];
    value: IYCoreMultipleSelectFieldProps['value'];
    filterValue: IYCoreMultipleSelectFieldProps['filterValue'];
    name: IYCoreMultipleSelectFieldProps['name'];
    placeholder: IYCoreMultipleSelectFieldProps['placeholder'];
    autofocus: NonNullable<IYCoreMultipleSelectFieldProps['autofocus']>;
    required: IYCoreMultipleSelectFieldProps['required'];
    errors: IYCoreMultipleSelectFieldProps['errors'];
    labelDebounce: IYCoreMultipleSelectFieldProps['labelDebounce'];
    isMapOptions: IYCoreMultipleSelectFieldProps['isMapOptions'];
    labelText: IYCoreMultipleSelectFieldProps['labelText'];
    labelTooltipText: IYCoreMultipleSelectFieldProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreMultipleSelectFieldProps['labelTooltipPlacement'];
    annotationText: IYCoreMultipleSelectFieldProps['annotationText'];
    items: NonNullable<IYCoreMultipleSelectFieldProps['items']>;
    itemLabel: NonNullable<IYCoreMultipleSelectFieldProps['itemLabel']>;
    itemValue: NonNullable<IYCoreMultipleSelectFieldProps['itemValue']>;
    isCustomFilter: IYCoreMultipleSelectFieldProps['isCustomFilter'];
    isFilterable: IYCoreMultipleSelectFieldProps['isFilterable'];
    filterCallback: IYCoreMultipleSelectFieldProps['filterCallback'];
    useVirtualScroll: IYCoreMultipleSelectFieldProps['useVirtualScroll'];
    singleLine: IYCoreMultipleSelectFieldProps['singleLine'];
    maskOptions: IYCoreMultipleSelectFieldProps['maskOptions'];
    ellipsis: IYCoreMultipleSelectFieldProps['ellipsis'];
    labelLocator: IYCoreMultipleSelectFieldProps['labelLocator'];
    locator: IYCoreMultipleSelectFieldProps['locator'];
    _focus: TDispatcher<FocusEvent_3>;
    _blur: TDispatcher<BlurEvent_2>;
    _select: TDispatcher<SelectEvent_3>;
    _input: TDispatcher<InputEvent_2>;
    private isOpened;
    private hasAnnotationSlot;
    private lastDropdownToggleTime;
    private hiddenChipsCount;
    private visibleChipEndIdx;
    private focusedIndex;
    readonly fieldWrapper?: YCoreFieldWrapper;
    readonly fieldInput?: YCoreFieldInput;
    readonly singleLineGhost?: HTMLElement;
    readonly singleLineChipsWrapper?: HTMLElement;
    private resizeObserver;
    private readonly baseClass;
    private readonly baseDropdownActivatorClass;
    private readonly baseDropdownContentClass;
    private readonly baseDropdownListItemsClass;
    private readonly baseDropdownListClass;
    private readonly baseDropdownListItemClass;
    private readonly baseAnnotationClass;
    private readonly baseChipClass;
    private readonly baseChipWrapperClass;
    private readonly baseSingleLineWrapperClass;
    private readonly baseSingleLineChipsWrapperClass;
    private readonly baseInputClass;
    private readonly baseInputOverlayClass;
    private readonly baseArrowIconClass;
    private readonly itemsGap;
    private get computedChipSize();
    private get computedChipTextSize();
    private get computedSize();
    private get computedAvatarSize();
    private get visibleChips();
    private get computedClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    private get computedChipClasses();
    private get computedInputClasses();
    private get computedActivatorClasses();
    private get computedChipWrapperClasses();
    private get computedSingleLineWrapperClasses();
    private get computedSingleLineChipsWrapperClasses();
    private get computedArrowIconClasses();
    private get computedDisabledOrReadonly();
    private get hasAnnotation();
    private get filteredItems();
    private get dropdownItems();
    private get hasSelectedValues();
    private get selectedItemsByValue();
    private get dropdownMiddlewares();
    private get availableWidth();
    private get maxVisibleChipsCount();
    private get countChipLabel();
    private getTextWidth;
    private get computedInputStyles();
    private calculateVisibleChips;
    private measureSelectedChips;
    private getChipWidth;
    private hasAvatarState;
    private handleSlotAnnotationChange;
    private findItemByValue;
    private isValueEqualListItem;
    private getValueFromItem;
    private getItemLabel;
    private setOrDeleteItemFromValue;
    private blurFieldInput;
    private deleteItemFromValue;
    private handleSelect;
    private changeDropdownVisible;
    private setFocusToInput;
    private handleBlur;
    private handleDropdownMouseDown;
    private handleFocus;
    private getDifferentTimeBetweenFocus;
    private handleClick;
    private handleNavigationKeyDown;
    private handleKeydown;
    private handleInput;
    private handleClickOutside;
    private tryScroll;
    static readonly styles: CSSResult[];
    private defaultItemsFilter;
    private getDropdownItemElementByIndex;
    private handleArrowNext;
    private handleArrowPrev;
    private handleSelectFocusedItem;
    private handleInputOverlayClick;
    private resetFilterValue;
    private observeForSingleLineMode;
    protected renderItemAvatar(item: IYCoreSelectListItem | undefined): TemplateResult<1> | typeof nothing;
    private renderListItem;
    protected renderDropdownList(): unknown;
    protected renderMultipleValues(): unknown;
    protected renderActivatorWrapperContent(): TemplateResult<1>;
    protected renderCounter(): TemplateResult<1> | typeof nothing;
    protected renderGhostContainer(): TemplateResult<1> | null;
    protected renderActivatorSingleLineWrapperContent(): TemplateResult<1>;
    protected renderDropdownActivatorWrapperContent(): TemplateResult<1>;
    protected renderDropdownActivator(): TemplateResult<1>;
    protected renderDropdownContent(): TemplateResult<1>;
    connectedCallback(): void;
    focus(): void;
    blur(): void;
    disconnectedCallback(): void;
    checkIsOpenedUpdates(changedProperties: PropertyValues, isOpened: boolean): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
}

export declare class YCorePagination extends LitElement implements Required<IYCorePaginationProps> {
    page: IYCorePaginationProps['page'];
    itemsPerPage: IYCorePaginationProps['itemsPerPage'];
    total: IYCorePaginationProps['total'];
    disabled: IYCorePaginationProps['disabled'];
    private _changePage;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedPage();
    private get computedTotal();
    private get computedItemsPerPage();
    private get totalPages();
    private get visiblePages();
    private get isLeftEllipsisVisible();
    private get isRightEllipsisVisible();
    private get isPrevButtonDisabled();
    private get isNextButtonDisabled();
    private handleChangePage;
    private handlePreviousPage;
    private handleNextPage;
    private handleLeftEllipsisClick;
    private handleRightEllipsisClick;
    connectedCallback(): void;
    protected renderEllipsis(clickHandler: (event: Event) => void): TemplateResult<1>;
    protected renderPages(): unknown;
    protected render(): TemplateResult<1>;
}

export declare class YCorePhoneCode extends LitElement implements Required<IYCorePhoneCodeProps> {
    disabled: IYCorePhoneCodeProps['disabled'];
    size: IYCorePhoneCodeProps['size'];
    readonly: IYCorePhoneCodeProps['readonly'];
    code: IYCorePhoneCodeProps['code'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get iconSize();
    private get textSize();
    connectedCallback(): void;
    protected render(): unknown;
}

export declare class YCorePhoneField extends LocalizedElement implements Required<IYCorePhoneFieldExternalProps> {
    disabled: IYCorePhoneFieldExternalProps['disabled'];
    readonly: IYCorePhoneFieldExternalProps['readonly'];
    error: IYCorePhoneFieldExternalProps['error'];
    size: IYCorePhoneFieldExternalProps['size'];
    value: IYCorePhoneFieldExternalProps['value'];
    name: IYCorePhoneFieldExternalProps['name'];
    placeholder: IYCorePhoneFieldExternalProps['placeholder'];
    autofocus: NonNullable<IYCorePhoneFieldExternalProps['autofocus']>;
    required: IYCorePhoneFieldExternalProps['required'];
    errors: IYCorePhoneFieldExternalProps['errors'];
    labelText: IYCorePhoneFieldExternalProps['labelText'];
    labelDebounce: IYCorePhoneFieldExternalProps['labelDebounce'];
    labelTooltipText: IYCorePhoneFieldExternalProps['labelTooltipText'];
    labelTooltipPlacement: IYCorePhoneFieldExternalProps['labelTooltipPlacement'];
    annotationText: IYCorePhoneFieldExternalProps['annotationText'];
    minSearchLength: IYCorePhoneFieldExternalProps['minSearchLength'];
    withoutCodeSelection: IYCorePhoneFieldExternalProps['withoutCodeSelection'];
    disabledAutocomplete: IYCorePhoneFieldExternalProps['disabledAutocomplete'];
    optionPhonePrivacyEnabled: IYCorePhoneFieldExternalProps['optionPhonePrivacyEnabled'];
    ellipsis: IYCorePhoneFieldExternalProps['ellipsis'];
    countries: IYCorePhoneFieldExternalProps['countries'];
    defaultCountryId: IYCorePhoneFieldExternalProps['defaultCountryId'];
    emptyStateTitle: IYCorePhoneFieldExternalProps['emptyStateTitle'];
    emptyStateDescription: IYCorePhoneFieldExternalProps['emptyStateDescription'];
    emptyStateIcon: IYCorePhoneFieldExternalProps['emptyStateIcon'];
    labelLocator: IYCorePhoneFieldExternalProps['labelLocator'];
    locator: IYCorePhoneFieldExternalProps['locator'];
    searchFunction: IYCorePhoneFieldExternalProps['searchFunction'];
    _focus: TDispatcher<FocusEvent_4>;
    _blur: TDispatcher<BlurEvent_3>;
    _selectOption: TDispatcher<SelectOptionEvent>;
    _change: TDispatcher<PhoneFieldChangeEvent>;
    readonly fieldInput?: YCoreFieldInput;
    private isOpened;
    private isCountriesOpened;
    private autocompleteOptions;
    private loadingAutocompleteOptions;
    private countryId;
    private ignoreAutoCountryDetection;
    private currentSearchRequestId;
    private hasAnnotationSlot;
    private countryNames;
    private focusedIndex;
    private focusedCountryIndex;
    private maskInstance?;
    private readonly baseClass;
    private readonly baseDropdownActivatorClass;
    private readonly baseDropdownContentClass;
    private readonly baseDropdownListItemClass;
    private readonly baseDropdownListItemsClass;
    private readonly baseDropdownListItemLoader;
    private readonly baseDropdownListItemAppendClass;
    static readonly styles: CSSResult[];
    private get computedDropdownListStyles();
    private get computedDisabledOrReadonly();
    private get refinedPhone();
    private get phoneQuery();
    private get country();
    private get countryList();
    private get firstCountryIdInList();
    private get maskOptions();
    private get isDropdownOpened();
    private get isCountriesDropdownOpened();
    private get dropdownMiddlewares();
    private normalizePhoneNumber;
    private get maskedValue();
    private applyMask;
    private destroyMask;
    private getDefaultCountry;
    private getCountry;
    private unmaskPhone;
    private getPhoneData;
    private handleClickOutside;
    private get computedClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    private get computedFieldWrapperClasses();
    private get computedFieldInputClasses();
    private get hasAnnotation();
    private get maxPhoneLength();
    private get phonePlaceHolder();
    private get inputAutocomplete();
    private get isClearButtonVisible();
    private handleFocus;
    private handleBlur;
    private handleSearchComplete;
    private loadAutocompleteOptions;
    private makeSearch;
    private sanitizeCountryCode;
    private forceSetMaskedValueToInput;
    private sanitizePhoneInput;
    private handleInput;
    changeDropdownVisible: (value: boolean) => void;
    private handleSelectAutocompleteOption;
    private handleCountriesEscapeKey;
    private handleAutocompleteEscapeKey;
    private handleCountriesNavigationKeyDown;
    private handleAutocompleteNavigationKeyDown;
    private handleNavigationKeyDown;
    private handleDropdownOpened;
    private handleDropdownClosed;
    private handleCountriesDropdownOpened;
    private handleCountriesDropdownClosed;
    private tryScroll;
    private getDropdownItemElementByIndex;
    private handleArrowNext;
    private handleArrowPrev;
    private handleSelectFocusedItem;
    private handleCodeClick;
    private handleCountryPick;
    private getCountryElementByIndex;
    private getSelectedCountryIndex;
    private handleCountryArrowNext;
    private handleCountryArrowPrev;
    private handleSelectFocusedCountry;
    private maskPhone;
    private formatPhoneByCountryMask;
    private getHiddenPhone;
    private applyMaskIfCountryChanged;
    private detectCountry;
    updated(_changedProperties: PropertyValues<this>): void;
    private handleClear;
    private handleSlotAnnotationChange;
    private handleLabelClick;
    private handleDropdownMouseDown;
    focus(): void;
    blur(): void;
    disconnectedCallback(): void;
    protected renderDropdownActivator(): TemplateResult<1>;
    protected renderDropdownListExtraSubtitles(option: TYCorePhoneFieldAutocompleteOption): ( TemplateResult<1> | typeof nothing)[];
    get formattedAutocompleteOptions(): TYCorePhoneFieldAutocompleteOption[];
    protected renderDropdownList(): unknown;
    protected renderDropdownCountriesContent(): TemplateResult<1>;
    private get isEmptyStateAvailable();
    private renderEmptyState;
    private renderLoader;
    protected renderDropdownContent(): TemplateResult<1>;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCorePopover extends LitElement implements Required<IYCorePopoverProps> {
    trigger: IYCorePopoverProps['trigger'];
    offset: IYCorePopoverProps['offset'];
    padding: IYCorePopoverProps['padding'];
    placement: IYCorePopoverProps['placement'];
    strategy: IYCorePopoverProps['strategy'];
    type: IYCorePopoverProps['type'];
    transition: IYCorePopoverProps['transition'];
    submitText: IYCorePopoverProps['submitText'];
    cancelText: IYCorePopoverProps['cancelText'];
    isOpen: IYCorePopoverProps['isOpen'];
    disabled: IYCorePopoverProps['disabled'];
    inline: IYCorePopoverProps['inline'];
    hasArrow: IYCorePopoverProps['hasArrow'];
    ignoreNativeDropdownEvents: IYCorePopoverProps['ignoreNativeDropdownEvents'];
    middlewares: IYCorePopoverProps['middlewares'];
    delay: IYCorePopoverProps['delay'];
    preventEscape: IYCorePopoverProps['preventEscape'];
    isContentVisible: boolean | undefined;
    hasActionsSlotContent: boolean;
    private _submit;
    private _cancel;
    private readonly baseClass;
    protected get baseActionsClass(): string;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedActionsClasses();
    private open;
    private close;
    private handleCancel;
    private handleEsc;
    private handleConfirm;
    private handleClickOutside;
    private handleUpdateContentVisible;
    private handleSlotChange;
    updated(changedProperties: Map<string, unknown>): void;
    private renderActionsContent;
    private get hasActions();
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreRadioButton extends LitElement implements Required<Omit<IYCoreRadioButtonExternalProps, 'error'>> {
    size: IYCoreRadioButtonExternalProps['size'];
    checked: IYCoreRadioButtonExternalProps['checked'];
    value: IYCoreRadioButtonExternalProps['value'];
    disabled: IYCoreRadioButtonExternalProps['disabled'];
    name: IYCoreRadioButtonExternalProps['name'];
    alignment: IYCoreRadioButtonExternalProps['alignment'];
    labelText: IYCoreRadioButtonExternalProps['labelText'];
    labelTooltipText: IYCoreRadioButtonExternalProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreRadioButtonExternalProps['labelTooltipPlacement'];
    required: IYCoreRadioButtonExternalProps['required'];
    annotationText: IYCoreRadioButtonExternalProps['annotationText'];
    labelOverflowDebounce: IYCoreRadioButtonExternalProps['labelOverflowDebounce'];
    errors: IYCoreRadioButtonExternalProps['errors'];
    locator: IYCoreRadioButtonExternalProps['locator'];
    private groupValue;
    private _checked;
    private readonly baseClass;
    private readonly baseLabelClass;
    private readonly baseAnnotationClass;
    private hasLabelSlot;
    private hasAnnotationSlot;
    private isHovered;
    private get radioButtonClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    static readonly styles: CSSResult[];
    private handleSlotLabelChange;
    private handleSlotAnnotationChange;
    private handleClick;
    private handleChecked;
    private handleMouseEnter;
    private handleMouseLeave;
    private get computedChecked();
    updated(): void;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreRadioButtonGroup extends LitElement implements Required<IYCoreRadioButtonGroupProps> {
    value: IYCoreRadioButtonGroupProps['value'];
    alignment: IYCoreRadioButtonGroupProps['alignment'];
    size: IYCoreRadioButtonGroupProps['size'];
    direction: IYCoreRadioButtonGroupProps['direction'];
    labelText: IYCoreRadioButtonGroupProps['labelText'];
    labelTooltipText: IYCoreRadioButtonGroupProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreRadioButtonGroupProps['labelTooltipPlacement'];
    labelDebounce: IYCoreRadioButtonGroupProps['labelDebounce'];
    labelTooltipActive: IYCoreRadioButtonGroupProps['labelTooltipActive'];
    labelLocator: IYCoreRadioButtonGroupProps['labelLocator'];
    private _checked;
    private handleValueChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedLabelClasses();
    private get computedWrapperClasses();
    protected render(): TemplateResult<1>;
}

export declare class YCoreSearchTextHighlighted extends LitElement implements Required<IYCoreSearchTextHighlightedProps> {
    text: IYCoreSearchTextHighlightedProps['text'];
    search: IYCoreSearchTextHighlightedProps['search'];
    size: IYCoreSearchTextHighlightedProps['size'];
    variant: IYCoreSearchTextHighlightedProps['variant'];
    ignoredSymbols: IYCoreSearchTextHighlightedProps['ignoredSymbols'];
    stopHighlight: IYCoreSearchTextHighlightedProps['stopHighlight'];
    caseSensitive: IYCoreSearchTextHighlightedProps['caseSensitive'];
    highlightTextVariant: IYCoreSearchTextHighlightedProps['highlightTextVariant'];
    ellipsis: IYCoreSearchTextHighlightedProps['ellipsis'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedHighlightedClasses();
    get highlighted(): Segment[];
    get regexHighlightFlag(): string;
    private escapeIgnoredSymbols;
    highlightSegments(text: string, search: string): Segment[];
    getHighlightedSegments(segment: Segment, isNeedTransform: boolean): Segment[];
    /**
     * Строит сегменты для последующего рендеринга
     * @param text исходная строка
     * @param matchTextPositions массив найденных позиций в исходной строке с учетом игнорируемых символов
     * @param isInvert требуется для управления устанавливаемым цветом при разных сценариях (подсветка текста, исключение игнорируемых символов из подсветки)
     */
    buildSegments(text: string, matchTextPositions: MatchTextPosition[], isInvert?: boolean): Segment[];
    /** Исключает игнорируемые символы из уже подсвеченного сегмента, разбивая его на отдельные сегменты */
    excludeIgnoredSymbols(highlightedSegment: Segment): Segment[];
    connectedCallback(): void;
    protected render(): TemplateResult;
}

export declare class YCoreSegmentControl extends LitElement implements Required<IYCoreSegmentControlProps> {
    options: IYCoreSegmentControlProps['options'];
    size: IYCoreSegmentControlProps['size'];
    value: IYCoreSegmentControlProps['value'];
    manual: IYCoreSegmentControlProps['manual'];
    private _click;
    private _activeSegmentValue;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private handleClick;
    private setDefaultActiveSegment;
    protected renderList(): unknown;
    connectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1> | typeof nothing;
}

export declare class YCoreSegmentOption extends LitElement implements Required<IYCoreSegmentOptionProps> {
    active: IYCoreSegmentOptionProps['active'];
    disabled: IYCoreSegmentOptionProps['disabled'];
    hovered: IYCoreSegmentOptionProps['hovered'];
    icon: IYCoreSegmentOptionProps['icon'];
    locator: IYCoreSegmentOptionProps['locator'];
    size: IYCoreSegmentOptionProps['size'];
    value: IYCoreSegmentOptionProps['value'];
    private _click;
    private readonly baseClass;
    private get computedIconSize();
    static readonly styles: CSSResult[];
    private get computedClasses();
    private handleClick;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSelectField extends LitElement implements Required<IYCoreSelectFieldExternalProps> {
    disabled: IYCoreSelectFieldExternalProps['disabled'];
    readonly: IYCoreSelectFieldExternalProps['readonly'];
    error: IYCoreSelectFieldExternalProps['error'];
    size: IYCoreSelectFieldExternalProps['size'];
    value: IYCoreSelectFieldExternalProps['value'];
    filterValue: IYCoreSelectFieldExternalProps['filterValue'];
    name: IYCoreSelectFieldExternalProps['name'];
    placeholder: IYCoreSelectFieldExternalProps['placeholder'];
    autofocus: NonNullable<IYCoreSelectFieldExternalProps['autofocus']>;
    required: IYCoreSelectFieldExternalProps['required'];
    errors: IYCoreSelectFieldExternalProps['errors'];
    labelDebounce: IYCoreSelectFieldExternalProps['labelDebounce'];
    isMapOptions: IYCoreSelectFieldExternalProps['isMapOptions'];
    labelText: IYCoreSelectFieldExternalProps['labelText'];
    labelTooltipText: IYCoreSelectFieldExternalProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreSelectFieldExternalProps['labelTooltipPlacement'];
    annotationText: IYCoreSelectFieldExternalProps['annotationText'];
    items: NonNullable<IYCoreSelectFieldExternalProps['items']>;
    itemLabel: NonNullable<IYCoreSelectFieldExternalProps['itemLabel']>;
    itemValue: NonNullable<IYCoreSelectFieldExternalProps['itemValue']>;
    displayValue: NonNullable<IYCoreSelectFieldExternalProps['displayValue']>;
    isCustomFilter: IYCoreSelectFieldExternalProps['isCustomFilter'];
    isFilterable: IYCoreSelectFieldExternalProps['isFilterable'];
    filterCallback: IYCoreSelectFieldExternalProps['filterCallback'];
    useVirtualScroll: IYCoreSelectFieldExternalProps['useVirtualScroll'];
    maskOptions: IYCoreSelectFieldExternalProps['maskOptions'];
    ellipsis: IYCoreSelectFieldExternalProps['ellipsis'];
    locator: IYCoreSelectFieldExternalProps['locator'];
    labelLocator: IYCoreSelectFieldExternalProps['labelLocator'];
    _focus: TDispatcher<FocusEvent_3>;
    _select: TDispatcher<SelectEvent_2>;
    _input: TDispatcher<InputEvent_2>;
    _blur: TDispatcher<BlurEvent_2>;
    readonly fieldInput?: YCoreFieldInput;
    private _virtualizer?;
    private isOpened;
    private hasAnnotationSlot;
    private hasBeforeSlot;
    private lastFocusTime;
    private focusedIndex;
    private virtualizerHeightPx;
    private virtualizerContentHeightPx;
    private readonly dropdownCellPadding;
    private readonly baseClass;
    private readonly baseDropdownActivatorClass;
    private readonly baseDropdownContentClass;
    private readonly baseDropdownListClass;
    private readonly baseDropdownListItemClass;
    private readonly baseDropdownListItemsClass;
    private readonly baseVirtualizerClass;
    private readonly baseAnnotationClass;
    private readonly baseArrowIconClass;
    private readonly baseInputClass;
    static readonly styles: CSSResult[];
    private get dropdownListContainer();
    private get selectedItemByValue();
    private get inputValue();
    private get computedClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    private get computedActivatorClasses();
    private get computedArrowIconClasses();
    private get computedInputClasses();
    private get computedDisabledOrReadonly();
    private get computedRenderedItemMaxHeight();
    /**
     * Расчёт height виртулизированного списка, так как height lit-virtualizer это 0
     */
    private readCssVariable;
    private getDropdownListHeightLimits;
    private readVirtualizerSizerHeight;
    private calculateVirtualizerContentHeight;
    private getVirtualizerContentHeightPx;
    private applyVirtualizerMeasuredHeight;
    private get computedVirtualizerStyles();
    private getUpdatesPromise;
    private get computedDropdownCellStyles();
    private resetVirtualizerHeight;
    private syncVirtualizerHeight;
    private get canToggleDropdown();
    private get isDropdownOpened();
    private get hasAnnotation();
    private get dropdownMiddlewares();
    private get shouldSkipFiltering();
    private get filteredItems();
    private get dropdownItems();
    private hasAvatarState;
    private handleSlotBeforeChange;
    private handleSlotAnnotationChange;
    private setFilterValue;
    private isValueEqualListItem;
    private findItemByValue;
    private isItemSelected;
    private getValueFromItem;
    private handleSelect;
    private tryScrollToCenter;
    private scrollVirtualizerToIndex;
    private scrollSelectedItemElementIntoView;
    private scrollToSelectedItem;
    private changeDropdownVisible;
    private handleNavigationKeyDown;
    private handleNavigationKey;
    private handleDropdownOpened;
    private handleDropdownOpenedAsync;
    private removeNavigationKeyDownListener;
    private handleDropdownClosed;
    private handleBlur;
    private handleLabelClick;
    private handleFocus;
    private handleClick;
    private handleInput;
    private handleClickOutside;
    private handleDropdownMouseDown;
    private defaultItemsFilter;
    private getSelectedIndex;
    private getDropdownItemElementByIndex;
    private getNextFocusedIndex;
    private scrollItemIntoViewByIndex;
    private moveFocusedIndex;
    private handleArrowNext;
    private handleArrowPrev;
    private handleSelectFocusedItem;
    focus(): void;
    blur(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected renderFieldAvatar(item: IYCoreSelectListItem | undefined): TemplateResult<1> | typeof nothing;
    protected renderItemAvatar(item: IYCoreSelectListItem): TemplateResult<1>;
    protected renderPrependContent(item: IYCoreSelectListItem): TemplateResult<1> | typeof nothing;
    protected renderAppendContent(item: IYCoreSelectListItem): TemplateResult<1> | typeof nothing;
    protected renderDropdownList(): unknown;
    protected renderDropdownActivator(): TemplateResult<1>;
    protected renderDropdownContent(): TemplateResult<1>;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSideMenuItem extends LitElement implements Required<IYCoreSideMenuItemExternalProps> {
    label: IYCoreSideMenuItemExternalProps['label'];
    labelTooltipPlacement: IYCoreSideMenuItemExternalProps['labelTooltipPlacement'];
    annotation: IYCoreSideMenuItemExternalProps['annotation'];
    icon: IYCoreSideMenuItemExternalProps['icon'];
    variant: IYCoreSideMenuItemExternalProps['variant'];
    isActive: IYCoreSideMenuItemExternalProps['isActive'];
    href: IYCoreSideMenuItemExternalProps['href'];
    target: IYCoreSideMenuItemExternalProps['target'];
    opened: IYCoreSideMenuItemExternalProps['opened'];
    disabled: IYCoreSideMenuItemExternalProps['disabled'];
    private slotsState;
    private _click;
    private _mouseenter;
    private _mouseleave;
    private _focus;
    private _blur;
    private _openedChange;
    private readonly baseClass;
    private readonly HIDE_MENU_TIME;
    private readonly TOOLTIP_DELAY;
    private _internalOpened;
    private isLabelOverflowed;
    private isBodyHovered;
    private isControlHovered;
    private isMenuHovered;
    private _onMediaSlotChange;
    private _onAnnotationSlotChange;
    private _onControlSlotChange;
    private _onChildrenSlotChange;
    private _onCollapseContentSlotChange;
    private closeTimeout;
    static readonly styles: CSSResult[];
    constructor();
    private get computedClasses();
    private get isOpened();
    private get isFull();
    private get isCollapsed();
    private get shouldRenderMediaSlot();
    private get shouldRenderAnnotation();
    private get shouldRenderCollapseChevron();
    private get shouldRenderControlSlot();
    private get shouldRenderLinkBody();
    private get isLabelTooltipActiveInFullMode();
    private get isLabelTooltipActiveInCollapseMode();
    private get isLabelTooltipActive();
    private get isLabelTooltipHasArrow();
    private get labelTooltipComputedPlacement();
    private get labelTooltipOffset();
    private get canShowCollapseMenu();
    private get canToggleByClick();
    private setIsOpened;
    private handleSlotChange;
    private handleBodyMouseEnter;
    private handleBodyMouseLeave;
    private handleMenuMouseEnter;
    private handleMenuMouseLeave;
    private handleControlMouseEnter;
    private handleControlMouseLeave;
    private handleBodyClick;
    private handleBodyFocus;
    private handleBodyBlur;
    private scheduleCloseMenu;
    private clearCloseTimeout;
    private labelOverflowChange;
    protected updated(changedProps: Map<string, unknown>): void;
    disconnectedCallback(): void;
    private renderInnerBody;
    private renderLinkBody;
    private renderRegularBody;
    private renderFullChildren;
    private renderCollapseChildren;
    private renderChildren;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSimpleBanner extends LitElement implements Required<IYCoreSimpleBannerProps> {
    description: IYCoreSimpleBannerProps['description'];
    descriptionSize: IYCoreSimpleBannerProps['descriptionSize'];
    header: IYCoreSimpleBannerProps['header'];
    stretched: IYCoreSimpleBannerProps['stretched'];
    colorText: IYCoreSimpleBannerProps['colorText'];
    primaryButtonVariant: IYCoreSimpleBannerProps['primaryButtonVariant'];
    primaryButtonText: IYCoreSimpleBannerProps['primaryButtonText'];
    secondaryButtonVariant: IYCoreSimpleBannerProps['secondaryButtonVariant'];
    secondaryButtonText: IYCoreSimpleBannerProps['secondaryButtonText'];
    hostStyles: IYCoreSimpleBannerProps['hostStyles'];
    hideCloseIcon: IYCoreSimpleBannerProps['hideCloseIcon'];
    truncateDescription: IYCoreSimpleBannerProps['truncateDescription'];
    _close: TDispatcher<CloseEmitEvent>;
    _primaryButtonClick: TDispatcher<PrimaryButtonClickEmitEvent>;
    _secondaryButtonClick: TDispatcher<SecondaryButtonClickEmitEvent>;
    private readonly baseClass;
    private hasActionsSlot;
    connectedCallback(): void;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get hasActions();
    private get computedActionsClasses();
    private handleCloseIconClick;
    private handlePrimaryButtonClick;
    private handleSecondaryButtonClick;
    private handleActionsSlotChange;
    private get computedLineclamp();
    private renderHeader;
    private renderActionButtons;
    private renderActions;
    private renderCloseIcon;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSimpleButton extends LitElement implements Required<IYCoreSimpleButtonProps> {
    size: IYCoreSimpleButtonProps['size'];
    variant: IYCoreSimpleButtonProps['variant'];
    disabled: IYCoreSimpleButtonProps['disabled'];
    loading: IYCoreSimpleButtonProps['loading'];
    href: IYCoreSimpleButtonProps['href'];
    target: IYCoreSimpleButtonProps['target'];
    alignment: IYCoreSimpleButtonProps['alignment'];
    fullWidth: IYCoreSimpleButtonProps['fullWidth'];
    hostStyles: IYCoreSimpleButtonProps['hostStyles'];
    loaderVariant: IYCoreSimpleButtonProps['loaderVariant'];
    private get isLoading();
    private readonly baseClass;
    private readonly baseContentClass;
    private get computedClasses();
    private get computedContentClasses();
    private get computedLoaderSize();
    private renderButtonContent;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult;
    static readonly styles: CSSResult[];
}

export declare class YCoreSimpleCheckbox extends LitElement implements Required<IYCoreSimpleCheckboxProps> {
    size: IYCoreSimpleCheckboxProps['size'];
    checked: IYCoreSimpleCheckboxProps['checked'];
    indeterminate: IYCoreSimpleCheckboxProps['indeterminate'];
    error: IYCoreSimpleCheckboxProps['error'];
    disabled: IYCoreSimpleCheckboxProps['disabled'];
    hovered: IYCoreSimpleCheckboxProps['hovered'];
    private _checked;
    private readonly baseClass;
    private get checkboxClasses();
    static readonly styles: CSSResult[];
    private renderCheckedIcon;
    private renderIconIndeterminate;
    private renderIcon;
    private handleClick;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSimpleChip extends LitElement implements Required<IYCoreSimpleChipProps> {
    size: IYCoreSimpleChipProps['size'];
    variant: IYCoreSimpleChipProps['variant'];
    disabled: IYCoreSimpleChipProps['disabled'];
    readonly: IYCoreSimpleChipProps['readonly'];
    background: IYCoreSimpleChipProps['background'];
    color: IYCoreSimpleChipProps['color'];
    _iconClick: TDispatcher<ClickIconEmitEvent>;
    private readonly baseClass;
    private readonly baseIconClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedStyle();
    protected updated(): void;
    private handleIconClick;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSimpleRadioButton extends LitElement implements Required<IYCoreSimpleRadioButtonProps> {
    size: IYCoreSimpleRadioButtonProps['size'];
    checked: IYCoreSimpleRadioButtonProps['checked'];
    error: IYCoreSimpleRadioButtonProps['error'];
    disabled: IYCoreSimpleRadioButtonProps['disabled'];
    name: IYCoreSimpleRadioButtonProps['name'];
    hovered: IYCoreSimpleRadioButtonProps['hovered'];
    private _checked;
    private readonly baseClass;
    private get radioButtonClasses();
    static readonly styles: CSSResult[];
    private handleClick;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSimpleToggle extends LitElement implements Required<IYCoreSimpleToggleProps> {
    disabled: IYCoreSimpleToggleProps['disabled'];
    checked: IYCoreSimpleToggleProps['checked'];
    hovered: IYCoreSimpleToggleProps['hovered'];
    size: IYCoreSimpleToggleProps['size'];
    private _checked;
    private readonly baseClass;
    private get toggleClasses();
    static readonly styles: CSSResult[];
    private handleClick;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSkeleton extends LitElement implements Required<IYCoreSkeletonProps> {
    variant: IYCoreSkeletonProps['variant'];
    width: IYCoreSkeletonProps['width'];
    height: IYCoreSkeletonProps['height'];
    private readonly baseClass;
    private viewportObserver;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private setSizes;
    protected updated(_changedProperties: PropertyValues): void;
    private setupViewportObserver;
    private teardownViewportObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreSkeletonTable extends LitElement implements Required<IYCoreSkeletonTableProps> {
    columns: IYCoreSkeletonTableProps['columns'];
    rows: IYCoreSkeletonTableProps['rows'];
    hasPagination: IYCoreSkeletonTableProps['hasPagination'];
    stripe: IYCoreSkeletonTableProps['stripe'];
    hideHead: IYCoreSkeletonTableProps['hideHead'];
    hideBar: IYCoreSkeletonTableProps['hideBar'];
    private readonly baseClass;
    private readonly baseClassPagination;
    private static readonly SKELETON_CELL_HEIGHT;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedGridTemplateColumns();
    protected renderColumns(isHead: boolean): unknown;
    protected renderRows(): unknown;
    protected renderPagination(): TemplateResult<1> | typeof nothing;
    connectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreTab extends LitElement implements Required<IYCoreTabProps> {
    active: IYCoreTabProps['active'];
    disabled: IYCoreTabProps['disabled'];
    isTagVisible: IYCoreTabProps['isTagVisible'];
    tagText: IYCoreTabProps['tagText'];
    locator: IYCoreTabProps['locator'];
    locatorTag: IYCoreTabProps['locatorTag'];
    locatorCounter: IYCoreTabProps['locatorCounter'];
    isCounterVisible: IYCoreTabProps['isCounterVisible'];
    text: IYCoreTabProps['text'];
    counterValue: IYCoreTabProps['counterValue'];
    tagVariant: IYCoreTabProps['tagVariant'];
    leftIcon: IYCoreTabProps['leftIcon'];
    leftIconSize: IYCoreTabProps['leftIconSize'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    protected firstUpdated(): void;
    private get computedClass();
    private get computedTextVariant();
    private get computedCounterVariant();
    private get computedIconClass();
    private get computedActivatorClass();
    protected render(): TemplateResult<1>;
}

export declare class YCoreTable extends LitElement implements Required<IYCoreTableProps> {
    loading: IYCoreTableProps['loading'];
    disabled: IYCoreTableProps['disabled'];
    hideHead: IYCoreTableProps['hideHead'];
    hideBar: IYCoreTableProps['hideBar'];
    plugins: IYCoreTableProps['plugins'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreTableBar extends LitElement implements Required<IYCoreTableBarProps> {
    private plugins;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
}

declare const YCoreTableBarTagName = "y-core-table-bar";

export declare class YCoreTableCell extends LitElement implements Required<IYCoreTableCellProps> {
    sticky: IYCoreTableCellProps['sticky'];
    bordered: IYCoreTableCellProps['bordered'];
    align: IYCoreTableCellProps['align'];
    item: IYCoreTableCellProps['item'];
    itemLabel: IYCoreTableCellProps['itemLabel'];
    disabled: IYCoreTableCellProps['disabled'];
    ellipsis: IYCoreTableCellProps['ellipsis'];
    lineclamp: IYCoreTableCellProps['lineclamp'];
    private plugins;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedContent();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
}

declare const YCoreTableCellTagName = "y-core-table-cell";

export declare class YCoreTableHeadCell extends LitElement implements Required<IYCoreTableHeadCellProps> {
    sticky: IYCoreTableHeadCellProps['sticky'];
    bordered: IYCoreTableHeadCellProps['bordered'];
    align: IYCoreTableHeadCellProps['align'];
    disabled: IYCoreTableHeadCellProps['disabled'];
    sortable: IYCoreTableHeadCellProps['sortable'];
    sortDirection: IYCoreTableHeadCellProps['sortDirection'];
    header: IYCoreTableHeadCellProps['header'];
    headerLabel: IYCoreTableHeadCellProps['headerLabel'];
    ellipsis: IYCoreTableHeadCellProps['ellipsis'];
    lineclamp: IYCoreTableHeadCellProps['lineclamp'];
    hasHint: IYCoreTableHeadCellProps['hasHint'];
    private hasHintSlot;
    private plugins;
    private _sort;
    private readonly baseClass;
    private readonly baseWrapClass;
    private readonly baseContentClass;
    private readonly baseSortClass;
    private readonly baseHintClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedSortClasses();
    private get computedContent();
    private handleSlotHintChange;
    private handleSort;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected renderContent(): TemplateResult<1>;
    protected renderSort(): TemplateResult<1> | typeof nothing;
    protected renderHint(): TemplateResult<1> | typeof nothing;
    protected render(): TemplateResult<1>;
}

declare const YCoreTableHeadCellTagName = "y-core-table-head-cell";

export declare class YCoreTablePagination extends LitElement implements Required<IYCoreTablePaginationProps> {
    page: IYCoreTablePaginationProps['page'];
    itemsPerPage: IYCoreTablePaginationProps['itemsPerPage'];
    total: IYCoreTablePaginationProps['total'];
    disabled: IYCoreTablePaginationProps['disabled'];
    counterText: IYCoreTablePaginationProps['counterText'];
    optionsItemsPerPage: IYCoreTablePaginationProps['optionsItemsPerPage'];
    itemValue: IYCoreTablePaginationProps['itemValue'];
    itemLabel: IYCoreTablePaginationProps['itemLabel'];
    private plugins;
    private _changePage;
    private _changeItemsPerPage;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedMiddleText();
    private get computedOptionsItemsPerPage();
    private handleChangePage;
    private handleSelect;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
}

declare const YCoreTablePaginationTagName = "y-core-table-pagination";

export declare class YCoreTableRow extends LitElement implements Required<IYCoreTableRowProps> {
    sticky: IYCoreTableRowProps['sticky'];
    stripe: IYCoreTableRowProps['stripe'];
    selectable: IYCoreTableRowProps['selectable'];
    disabled: IYCoreTableRowProps['disabled'];
    private plugins;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
}

declare const YCoreTableRowTagName = "y-core-table-row";

declare const YCoreTableTagName = "y-core-table";

export declare class YCoreTabs extends LitElement implements Required<IYCoreTabsProps> {
    tabs: IYCoreTabsProps['tabs'];
    value: IYCoreTabsProps['value'];
    fullWidth: IYCoreTabsProps['fullWidth'];
    private showLeftButton;
    private showRightButton;
    private tabElements;
    private hasDefaultSlot;
    private hasOverflowWithFullWidth;
    private rootContainer?;
    private tabsContainer?;
    _changeActiveTab: TDispatcher<ChangeActiveTabEvent>;
    private readonly breakpoints;
    private readonly baseClass;
    private intersectionObserver;
    private rootContainerResizeObserver;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    protected initialize(tabElements?: YCoreTab[] | NodeListOf<YCoreTab>): void;
    protected destroy(): void;
    reinitialize(tabElements?: YCoreTab[] | NodeListOf<YCoreTab>): void;
    private get computedClass();
    private get computedTabsContainerClass();
    private checkOverflowWithFullWidth;
    private setupTabsContainerEventListeners;
    private removeTabsContainerEventListeners;
    private updateScrollButtons;
    private handleWheel;
    private handleItemClick;
    private moveHighlightBar;
    private animateHighlightBar;
    protected updated(_changedProperties: PropertyValues<this>): void;
    private handleFullWidthUpdate;
    private handleValueUpdate;
    private slotChangeHandler;
    private scrollToCenterHorizontal;
    protected renderTabList(): unknown;
    protected renderLeftNavButton(): TemplateResult<1> | typeof nothing;
    protected renderRightNavButton(): TemplateResult<1> | typeof nothing;
    private setupIntersectionObserver;
    private setupContainerResizeObserver;
    protected scrollToLeft(): void;
    protected scrollToRight(): void;
    protected scrollByDirection(direction: number): void;
    private getEdgeElementIndex;
    private scrollToTab;
    private handleTabClickFromSlot;
    protected render(): TemplateResult<1>;
}

export declare class YCoreTag extends LitElement implements Required<IYCoreTagProps> {
    locator: IYCoreTagProps['locator'];
    size: IYCoreTagProps['size'];
    variant: IYCoreTagProps['variant'];
    iconLeft: IYCoreTagProps['iconLeft'];
    disabled: IYCoreTagProps['disabled'];
    locatorLabel: IYCoreTagProps['locatorLabel'];
    locatorIcon: IYCoreTagProps['locatorIcon'];
    _iconClick: TDispatcher<ClickIconEmitEvent_2>;
    private readonly baseClass;
    private readonly baseIconClass;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private handleIconClick;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreText extends LitElement implements Required<IYCoreTextProps> {
    size: IYCoreTextProps['size'];
    variant: IYCoreTextProps['variant'];
    ellipsis: IYCoreTextProps['ellipsis'];
    lineclamp: IYCoreTextProps['lineclamp'];
    locator: IYCoreTextProps['locator'];
    trackOverflow: IYCoreTextProps['trackOverflow'];
    private _overflowChange;
    private readonly baseClass;
    private rootElement;
    private resizeObserver;
    private mutationObserver;
    private _hasOverflow;
    private _checkScheduled;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedLineclamp();
    private scheduleCheckOverflow;
    private firstScheduleCheckOverflow;
    private cancelScheduledCheck;
    private destroyObservers;
    private checkOverflow;
    private syncObservers;
    private shouldEnableObservers;
    private ensureMutationObserver;
    private createMutationObserver;
    private ensureResizeObserver;
    private createResizeObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues): void;
    protected firstUpdated(): void;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreTextarea extends LitElement implements Required<IYCoreTextareaProps> {
    disabled: IYCoreTextareaProps['disabled'];
    readonly: IYCoreTextareaProps['readonly'];
    error: IYCoreTextareaProps['error'];
    size: IYCoreTextareaProps['size'];
    value: IYCoreTextareaProps['value'];
    name: IYCoreTextareaProps['name'];
    placeholder: IYCoreTextareaProps['placeholder'];
    required: IYCoreTextareaProps['required'];
    maxlength: IYCoreTextareaProps['maxlength'];
    autofocus: IYCoreTextareaProps['autofocus'];
    labelText: IYCoreTextareaProps['labelText'];
    labelTooltipText: IYCoreTextareaProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreTextareaProps['labelTooltipPlacement'];
    labelDebounce: IYCoreTextareaProps['labelDebounce'];
    errors: IYCoreTextareaProps['errors'];
    clearable: IYCoreTextareaProps['clearable'];
    rows: IYCoreTextareaProps['rows'];
    resize: IYCoreTextareaProps['resize'];
    autogrow: IYCoreTextareaProps['autogrow'];
    locatorLabel: IYCoreTextareaProps['locatorLabel'];
    locatorError: IYCoreTextareaProps['locatorError'];
    labelLocator: IYCoreTextareaProps['labelLocator'];
    locator: IYCoreTextareaProps['locator'];
    locatorClearIcon: IYCoreTextareaProps['locatorClearIcon'];
    private _clickOutside;
    private _mouseenter;
    private _mouseleave;
    _input: TDispatcher<InputEvent_2>;
    _focus: TDispatcher<FocusEvent_3>;
    _blur: TDispatcher<BlurEvent_2>;
    _keydown: TDispatcher<KeydownEvent>;
    _renderTextarea: TDispatcher<RenderEvent>;
    _clear: TDispatcher<ClearEvent>;
    private readonly baseClass;
    private hasBeforeSlot;
    private hasAfterSlot;
    readonly fieldTextarea?: YCoreFieldTextarea;
    static readonly styles: CSSResult[];
    private readonly eventListenersList;
    private get computedClasses();
    private get computedLabelClasses();
    private get computedFieldWrapperClasses();
    private get computedFieldWrapperInnerClasses();
    private get computedCounterClasses();
    private get counterText();
    private get computedDisabledOrReadonly();
    private get showClearIcon();
    private get hasErrors();
    private handleSlotBeforeChange;
    private handleSlotAfterChange;
    private handleClickOutside;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleInput;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    private handleLabelClick;
    private handleClear;
    private handleRender;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected renderTextarea(): TemplateResult<1>;
    protected render(): TemplateResult<1>;
}

export declare class YCoreTextField extends LitElement implements Required<IYCoreTextFieldProps> {
    disabled: IYCoreTextFieldProps['disabled'];
    readonly: IYCoreTextFieldProps['readonly'];
    error: IYCoreTextFieldProps['error'];
    size: IYCoreTextFieldProps['size'];
    value: IYCoreTextFieldProps['value'];
    name: IYCoreTextFieldProps['name'];
    type: IYCoreTextFieldProps['type'];
    placeholder: IYCoreTextFieldProps['placeholder'];
    required: IYCoreTextFieldProps['required'];
    maxlength: IYCoreTextFieldProps['maxlength'];
    autofocus: IYCoreTextFieldProps['autofocus'];
    labelText: IYCoreTextFieldProps['labelText'];
    labelTooltipText: IYCoreTextFieldProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreTextFieldProps['labelTooltipPlacement'];
    labelDebounce: IYCoreTextFieldProps['labelDebounce'];
    annotationText: IYCoreTextFieldProps['annotationText'];
    errors: IYCoreTextFieldProps['errors'];
    clearable: IYCoreTextFieldProps['clearable'];
    maskOptions: IYCoreTextFieldProps['maskOptions'];
    locator: IYCoreTextFieldProps['locator'];
    locatorLabel: IYCoreTextFieldProps['locatorLabel'];
    locatorError: IYCoreTextFieldProps['locatorError'];
    locatorClearIcon: IYCoreTextFieldProps['locatorClearIcon'];
    labelLocator: IYCoreTextFieldProps['labelLocator'];
    labelOverflowMode: IYCoreTextFieldProps['labelOverflowMode'];
    ellipsis: IYCoreTextFieldProps['ellipsis'];
    private _clickOutside;
    private _mouseenter;
    private _mouseleave;
    _input: TDispatcher<InputEvent_2>;
    _focus: TDispatcher<FocusEvent_3>;
    _blur: TDispatcher<BlurEvent_2>;
    _keydown: TDispatcher<KeydownEvent>;
    _renderInput: TDispatcher<RenderEvent>;
    _clear: TDispatcher<ClearEvent>;
    private readonly baseClass;
    private hasBeforeSlot;
    private hasAfterSlot;
    private hasAnnotationSlot;
    readonly fieldInput?: YCoreFieldInput;
    static readonly styles: CSSResult[];
    private get computedClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    private get computedFieldWrapperClasses();
    private get hasAnnotation();
    private get hasError();
    private handleSlotBeforeChange;
    private handleSlotAfterChange;
    private handleSlotAnnotationChange;
    private handleClickOutside;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleInput;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    private handleLabelClick;
    private handleClear;
    private handleRender;
    focus(): void;
    blur(): void;
    protected renderInput(): TemplateResult<1>;
    connectedCallback(): void;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    protected render(): TemplateResult<1>;
}

export declare class YCoreTip extends LitElement implements Required<IYCoreTipProps> {
    trigger: IYCoreTipProps['trigger'];
    isOpen: IYCoreTipProps['isOpen'];
    offset: IYCoreTipProps['offset'];
    padding: IYCoreTipProps['padding'];
    placement: IYCoreTipProps['placement'];
    strategy: IYCoreTipProps['strategy'];
    type: IYCoreTipProps['type'];
    transition: IYCoreTipProps['transition'];
    disabled: IYCoreTipProps['disabled'];
    inline: IYCoreTipProps['inline'];
    hasArrow: IYCoreTipProps['hasArrow'];
    middlewares: IYCoreTipProps['middlewares'];
    delay: IYCoreTipProps['delay'];
    private readonly baseClass;
    private arrowElement?;
    private isArrowMounted;
    private _visible;
    private _clickOutside;
    private get tipMiddlewares();
    private get positionCallbacks();
    static readonly styles: CSSResult[];
    private get computedClasses();
    protected updated(): void;
    private handleVisibleEmit;
    private handleClickOutside;
    connectedCallback(): void;
    protected firstUpdated(): void;
    private handleTipMouseDown;
    protected render(): TemplateResult<1>;
}

export declare class YCoreToast extends LitElement implements Required<IYCoreToastProps> {
    counterValue: IYCoreToastProps['counterValue'];
    variant: IYCoreToastProps['variant'];
    titleText: IYCoreToastProps['titleText'];
    description: IYCoreToastProps['description'];
    maxWidth: IYCoreToastProps['maxWidth'];
    private _close;
    private readonly baseClass;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    private get computedStyle();
    protected render(): TemplateResult<1>;
}

/**
 * Lit-элемент для отображения очереди тостов
 * Реализует интерфейс IToastQueueHost
 * @class YCoreToastQueueHost
 * @extends LitElement
 * @implements {IToastQueueHost}
 */
export declare class YCoreToastQueueHost extends LitElement implements Required<IToastQueueHost> {
    private items;
    /** Набор модулей очереди, подключенных к этому хосту */
    private module;
    /** Конфигурация хоста */
    private config;
    /** Флаг наведения курсора на область тостов */
    private hovered;
    private moveAnimations;
    private pendingFirstRects;
    private pendingPrevElements;
    private animationFrameId;
    toastWrappers: NodeListOf<HTMLElement>;
    private containerEl?;
    /** Базовый CSS класс для элемента */
    private readonly baseClass;
    /** Набор видимых тостов для управления таймерами */
    private visibleIds;
    /** Последнее состояние паузы по hover, отправленное в модуль */
    private lastPauseForHover;
    /** Кэш тостов, которые анимируются на уход */
    private leavingItems;
    /** Таймеры удаления уходящих тостов */
    private leavingTimers;
    /** Базовые длительности тостов для расчета задержки */
    private baseDurations;
    /** Флаг мобильного режима (для maxVisible = 1) */
    private isMobile;
    private readonly breakpoints;
    /** Вычисляемое свойство: максимальное количество видимых тостов (не менее 1) */
    private get maxVisible();
    /** Стили Lit-элемента */
    static readonly styles: CSSResult[];
    /**
     * Добавляет модуль очереди к хосту и подписывается на его обновления
     * @param module - Модуль очереди тостов
     */
    addQueueModule(module: IToastQueueModule): void;
    /**
     * Удаляет модуль очереди из хоста
     */
    removeQueueModule(): void;
    /**
     * Обновляет конфигурацию хоста
     * @param cfg - Новая конфигурация
     */
    setConfig(cfg: IToastQueueHostConfig): void;
    /**
     * Уничтожает хост и очищает все ресурсы
     */
    destroy(): void;
    /**
     * Возвращает длительность анимации ухода тоста
     * @private
     */
    private get leaveDurationMs();
    /**
     * Очищает таймер удаления уходящего тоста
     * @private
     */
    private clearLeavingTimer;
    /**
     * Завершает анимацию ухода тоста
     * @private
     */
    private finishLeaving;
    /**
     * Запускает анимацию ухода тоста
     * @private
     */
    private startLeaving;
    /**
     * Отменяет уходящий тост, если он снова появился
     * @private
     */
    private cancelLeaving;
    /**
     * Очищает метаданные по удаленному тосту
     * @private
     */
    private cleanupRemovedItem;
    /**
     * Регистрирует активные тосты
     * @private
     */
    private registerActiveItems;
    /**
     * Обрабатывает удаленные тосты
     * @private
     */
    private handleRemovedItems;
    /**
     * Обрабатывает удаленный тост
     * @private
     */
    private handleRemovedItem;
    /**
     * Останавливает уходящие тосты при переполнении
     * @private
     */
    private pruneLeavingInOverflow;
    /**
     * Синхронизирует состояние хоста с состоянием модулей
     * Обрабатывает анимации входа/выхода для тостов
     * @private
     */
    private syncWithModule;
    /**
     * Сравнивает два набора строк на равенство
     * @private
     */
    private areSetsEqual;
    /**
     * Собирает ID видимых тостов с учетом maxVisible
     * @private
     */
    private collectVisibleIds;
    /**
     * Применяет задержку удаления для новых видимых тостов
     * @private
     */
    private applyRemovalDelay;
    /**
     * Применяет задержку удаления к конкретному тосту
     * @private
     */
    private applyRemovalDelayToItem;
    /**
     * Возвращает базовую длительность тоста
     * @private
     */
    private getBaseDuration;
    /**
     * Обновляет набор видимых тостов и синхронизирует таймеры
     * @private
     */
    private updateVisibleToasts;
    private computePauseForHover;
    private setModuleVisibleIds;
    /**
     * Обработчик наведения курсора на область тостов
     * При наведении приостанавливает таймеры всех тостов
     * @private
     */
    private onMouseEnter;
    /**
     * Обработчик убирания курсора с области тостов
     * При убирании возобновляет таймеры всех тостов
     * @private
     */
    private onMouseLeave;
    /**
     * Приостанавливает таймеры всех тостов во всех модулях
     * @private
     */
    private pauseAllToasts;
    /**
     * Возобновляет таймеры всех тостов во всех модулях
     * @private
     */
    private resumeAllToasts;
    /**
     * Обработчик клика по кнопке закрытия тоста
     * @param id - ID тоста для закрытия
     * @private
     */
    private onCloseClick;
    /**
     * Рендерит один тост с анимацией и состоянием
     * @param item - Элемент тоста из очереди
     * @param counterValue - Значение счетчика скрытых тостов (если их больше maxVisible)
     * @protected
     * @returns Lit-шаблон тоста
     */
    protected renderToast(item: IToastQueueModuleItem, counterValue?: number): TemplateResult<1>;
    /**
     * Вычисляет параметры отображения активных тостов
     * @private
     */
    private getVisibleActiveItems;
    /**
     * Рендерит массив тостов с учетом ограничения по количеству
     * @protected
     * @returns Lit-шаблон с массивом тостов
     */
    protected renderToasts(): TemplateResult<1>;
    /**
     * Рендерит группу тостов для определенной позиции на экране
     * Если тостов больше maxVisible, показывает только последний с счетчиком
     * @protected
     * @returns Lit-шаблон группы тостов
     */
    protected renderToastGroup(): TemplateResult<1>;
    protected updated(changedProperties: Map<string, unknown>): void;
    disconnectedCallback(): void;
    private scheduleAnimations;
    private captureBeforeUpdate;
    private runAnimations;
    private collectCurrentElements;
    private animateLeaving;
    private animateMoveAndEnter;
    private animateMoveIfNeeded;
    private animateMove;
    private animateEnter;
    private animateLeave;
    /**
     * Основной метод рендеринга Lit-элемента
     * @protected
     * @returns Lit-шаблон всего хоста или nothing, если нет активных модулей
     */
    protected render(): TemplateResult<1> | typeof nothing;
}

export declare class YCoreToggle extends LitElement implements Required<IYCoreToggleExternalProps> {
    disabled: IYCoreToggleExternalProps['disabled'];
    checked: IYCoreToggleExternalProps['checked'];
    labelText: IYCoreToggleExternalProps['labelText'];
    labelTooltipText: IYCoreToggleExternalProps['labelTooltipText'];
    labelTooltipPlacement: IYCoreToggleExternalProps['labelTooltipPlacement'];
    annotationText: IYCoreToggleExternalProps['annotationText'];
    labelOverflowDebounce: IYCoreToggleExternalProps['labelOverflowDebounce'];
    alignment: IYCoreToggleExternalProps['alignment'];
    size: IYCoreToggleExternalProps['size'];
    locator: IYCoreToggleExternalProps['locator'];
    private _checked;
    private readonly baseClass;
    private readonly baseLabelClass;
    private readonly baseAnnotationClass;
    private hasAnnotationSlot;
    private hasLabelSlot;
    private isHovered;
    private get toggleClasses();
    private get computedLabelClasses();
    private get computedAnnotationClasses();
    private get computedInfoClasses();
    private get hasInfoContent();
    static readonly styles: CSSResult[];
    private handleSlotAnnotationChange;
    private handleSlotLabelChange;
    private handleClick;
    private handleChecked;
    private readonly handleMouseEnter;
    private readonly handleMouseLeave;
    connectedCallback(): void;
    protected renderInfoContent(): TemplateResult<1>;
    protected render(): TemplateResult<1>;
}

export declare class YCoreTooltip extends LitElement implements Required<IYCoreTooltipProps> {
    text: IYCoreTooltipProps['text'];
    placement: IYCoreTipProps['placement'];
    disabled: IYCoreTipProps['disabled'];
    type: IYCoreTipProps['type'];
    showOnCondition: IYCoreTooltipProps['showOnCondition'];
    delay: IYCoreTooltipProps['delay'];
    private readonly baseClass;
    static readonly styles: CSSResult[];
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): TemplateResult<1>;
}

export declare const yCrossedOutBell: {
    name: 'crossed_out_bell';
    data: string;
};

export declare const yCrown: {
    name: 'crown';
    data: string;
};

export declare const yCrystal: {
    name: 'crystal';
    data: string;
};

export declare const yCup: {
    name: 'cup';
    data: string;
};

export declare const yDay: {
    name: 'day';
    data: string;
};

export declare const yDelete: {
    name: 'delete';
    data: string;
};

export declare const yDesktop: {
    name: 'desktop';
    data: string;
};

export declare const yDevicePhone: {
    name: 'device_phone';
    data: string;
};

export declare const yDiscountPromotion: {
    name: 'discount_promotion';
    data: string;
};

export declare const yDiscountPromotionPercent: {
    name: 'discount_promotion_percent';
    data: string;
};

export declare const yDocumentCancle: {
    name: 'document_cancle';
    data: string;
};

export declare const yDocumentsFile: {
    name: 'documents_file';
    data: string;
};

export declare const yDownload: {
    name: 'download';
    data: string;
};

export declare const yDownloadReceipe: {
    name: 'download_receipe';
    data: string;
};

export declare const yDragAndDrop: {
    name: 'drag_and_drop';
    data: string;
};

export declare const yDragNDropHandle: {
    name: 'drag_n_drop_handle';
    data: string;
};

export declare const yEdit: {
    name: 'edit';
    data: string;
};

export declare const yEmptyCircle: {
    name: 'empty_circle';
    data: string;
};

export declare const yExitLogOut: {
    name: 'exit_log_out';
    data: string;
};

export declare const yExpense: {
    name: 'expense';
    data: string;
};

export declare const yEye: {
    name: 'eye';
    data: string;
};

export declare const yFileDownImport: {
    name: 'file_down_import';
    data: string;
};

export declare const yFileUpExport: {
    name: 'file_up_export';
    data: string;
};

export declare const yFillForm: {
    name: 'fill_form';
    data: string;
};

export declare const yFilter: {
    name: 'filter';
    data: string;
};

export declare const yFilterSortSetting: {
    name: 'filter_sort_setting';
    data: string;
};

export declare const yFilterSortSettingLine: {
    name: 'filter_sort_setting_line';
    data: string;
};

export declare const yFilterSortSettingStack: {
    name: 'filter_sort_setting_stack';
    data: string;
};

export declare const yFinanceInvoice: {
    name: 'finance_invoice';
    data: string;
};

export declare const yFinancesCalculator: {
    name: 'finances_calculator';
    data: string;
};

export declare const yFire: {
    name: 'fire';
    data: string;
};

export declare const yFolder: {
    name: 'folder';
    data: string;
};

export declare const yFolderClosed: {
    name: 'folder_closed';
    data: string;
};

export declare const yFolderGroup: {
    name: 'folder_group';
    data: string;
};

export declare const yFolderGroupTwoFolders: {
    name: 'folder_group_two_folders';
    data: string;
};

export declare const yFolderMoveTo: {
    name: 'folder_move_to';
    data: string;
};

export declare const yFolderPlusCircle: {
    name: 'folder_plus_circle';
    data: string;
};

export declare const yFreeUser: {
    name: 'free_user';
    data: string;
};

export declare const yGift: {
    name: 'gift';
    data: string;
};

export declare const yGoogle: {
    name: 'google';
    data: string;
};

export declare const yGooglePlay: {
    name: 'google_play';
    data: string;
};

export declare const yGooglePlayIcon: {
    name: 'google_play_icon';
    data: string;
};

export declare const yHamburger: {
    name: 'hamburger';
    data: string;
};

export declare const yHeadphonesSupport: {
    name: 'headphones_support';
    data: string;
};

export declare const yHealth: {
    name: 'health';
    data: string;
};

export declare const yHeartFavoriteLike: {
    name: 'heart_favorite_like';
    data: string;
};

export declare const yHelp: {
    name: 'help';
    data: string;
};

export declare const yHiddenEye: {
    name: 'hidden_eye';
    data: string;
};

export declare const yHornTrumpet: {
    name: 'horn_trumpet';
    data: string;
};

export declare const yHouse1: {
    name: 'house_1';
    data: string;
};

export declare const yHouse2: {
    name: 'house_2';
    data: string;
};

export declare const yIconsSet: IYIcon[];

export declare const yIncome: {
    name: 'income';
    data: string;
};

export declare const yInfo: {
    name: 'info';
    data: string;
};

export declare const yInProgress: {
    name: 'in_progress';
    data: string;
};

export declare const yInterfaceSelectAddPlus: {
    name: 'interface_select_add_plus';
    data: string;
};

export declare const yKassa: {
    name: 'kassa';
    data: string;
};

export declare const yLanguageTranslate: {
    name: 'language_translate';
    data: string;
};

export declare const yLaptop: {
    name: 'laptop';
    data: string;
};

export declare const yLayout: {
    name: 'layout';
    data: string;
};

export declare const yLineChart: {
    name: 'line_chart';
    data: string;
};

export declare const yLink: {
    name: 'link';
    data: string;
};

export declare const yList: {
    name: 'list';
    data: string;
};

export declare const yListAdd: {
    name: 'list_add';
    data: string;
};

export declare const yLoader: {
    name: 'loader';
    data: string;
};

export declare const yLock: {
    name: 'lock';
    data: string;
};

export declare const yLogIn2Fa: {
    name: 'log_in_2_fa';
    data: string;
};

export declare const yLoyaltyAbonement: {
    name: 'loyalty_abonement';
    data: string;
};

export declare const yLoyaltyCertificate: {
    name: 'loyalty_certificate';
    data: string;
};

export declare const yLoyaltyLoyaltyCard: {
    name: 'loyalty_loyalty_card';
    data: string;
};

export declare const yLoyaltyPersonalAccount: {
    name: 'loyalty_personal_account';
    data: string;
};

export declare const yLoyaltyReferral: {
    name: 'loyalty_referral';
    data: string;
};

export declare const yMagic: {
    name: 'magic';
    data: string;
};

export declare const yMail: {
    name: 'mail';
    data: string;
};

export declare const yMailEmailLetterSend: {
    name: 'mail_email_letter_send';
    data: string;
};

export declare const yMap: {
    name: 'map';
    data: string;
};

export declare const yMarkerPin: {
    name: 'marker_pin';
    data: string;
};

export declare const yMax: {
    name: 'max';
    data: string;
};

export declare const yMedicalCard: {
    name: 'medical_card';
    data: string;
};

export declare const yMessage: {
    name: 'message';
    data: string;
};

export declare const yMinus: {
    name: 'minus';
    data: string;
};

export declare const yMinusCircle: {
    name: 'minus_circle';
    data: string;
};

export declare const yMoneyBank: {
    name: 'money_bank';
    data: string;
};

export declare const yMoneyCardDiscountSale: {
    name: 'money_card_discount_sale';
    data: string;
};

export declare const yMoneyCoins: {
    name: 'money_coins';
    data: string;
};

export declare const yMoneyCoinsIncome: {
    name: 'money_coins_income';
    data: string;
};

export declare const yMoneyCoinsOutcome: {
    name: 'money_coins_outcome';
    data: string;
};

export declare const yMoneyCoinsTips: {
    name: 'money_coins_tips';
    data: string;
};

export declare const yMoneySale: {
    name: 'money_sale';
    data: string;
};

export declare const yMove: {
    name: 'move';
    data: string;
};

export declare const yNoConnection: {
    name: 'no_connection';
    data: string;
};

export declare const yNonCashPayment: {
    name: 'non_cash_payment';
    data: string;
};

export declare const yNoteComment: {
    name: 'note_comment';
    data: string;
};

export declare const yOnlineBookingTimeClock: {
    name: 'online_booking_time_clock';
    data: string;
};

export declare const yOther: {
    name: 'other';
    data: string;
};

export declare const yPageAdd: {
    name: 'page_add';
    data: string;
};

export declare const yPassport: {
    name: 'passport';
    data: string;
};

export declare const yPause: {
    name: 'pause';
    data: string;
};

export declare const yPaymentCard: {
    name: 'payment_card';
    data: string;
};

export declare const yPaymentCardSend: {
    name: 'payment_card_send';
    data: string;
};

export declare const yPayments: {
    name: 'payments';
    data: string;
};

export declare const yPaymentsFinance: {
    name: 'payments_finance';
    data: string;
};

export declare const yPhone: {
    name: 'phone';
    data: string;
};

export declare const yPhoneIncomming: {
    name: 'phone_incomming';
    data: string;
};

export declare const yPictureUploadPhoto: {
    name: 'picture_upload_photo';
    data: string;
};

export declare const yPin: {
    name: 'pin';
    data: string;
};

export declare const yPinFilled: {
    name: 'pin_filled';
    data: string;
};

export declare const yPinMap: {
    name: 'pin_map';
    data: string;
};

export declare const yPlay: {
    name: 'play';
    data: string;
};

export declare const yPlus: {
    name: 'plus';
    data: string;
};

export declare const yPrint: {
    name: 'print';
    data: string;
};

export declare const yProfile: {
    name: 'profile';
    data: string;
};

export declare const yProgressArrow: {
    name: 'progress_arrow';
    data: string;
};

export declare const yPuzzle: {
    name: 'puzzle';
    data: string;
};

export declare const yQrCode: {
    name: 'qr_code';
    data: string;
};

export declare const yQuestion: {
    name: 'question';
    data: string;
};

export declare const yQuote: {
    name: 'quote';
    data: string;
};

export declare const yQuoteCircle: {
    name: 'quote_circle';
    data: string;
};

export declare const yRead: {
    name: 'read';
    data: string;
};

export declare const yRecent: {
    name: 'recent';
    data: string;
};

export declare const yRepeat: {
    name: 'repeat';
    data: string;
};

export declare const yReplay: {
    name: 'replay';
    data: string;
};

export declare const yReset: {
    name: 'reset';
    data: string;
};

export declare const yRocket: {
    name: 'rocket';
    data: string;
};

export declare const yRotateImage: {
    name: 'rotate_image';
    data: string;
};

export declare const yRuble: {
    name: 'ruble';
    data: string;
};

export declare const ySalaryMoneyPay: {
    name: 'salary_money_pay';
    data: string;
};

export declare const ySaveDownload: {
    name: 'save_download';
    data: string;
};

export declare const ySearch: {
    name: 'search';
    data: string;
};

export declare const ySearchCross: {
    name: 'search_cross';
    data: string;
};

export declare const ySearchFavorite: {
    name: 'search_favorite';
    data: string;
};

export declare const ySend: {
    name: 'send';
    data: string;
};

export declare const ySerchCross: {
    name: 'serch_cross';
    data: string;
};

export declare const yServers: {
    name: 'servers';
    data: string;
};

export declare const yServersDatabase: {
    name: 'servers_database';
    data: string;
};

export declare const ySettings: {
    name: 'settings';
    data: string;
};

export declare const yShare: {
    name: 'share';
    data: string;
};

export declare const yShieldCheck: {
    name: 'shield_check';
    data: string;
};

export declare const yShieldWarning: {
    name: 'shield_warning';
    data: string;
};

export declare const yShopIntegration: {
    name: 'shop_integration';
    data: string;
};

export declare const yShoppingCartBasket: {
    name: 'shopping_cart_basket';
    data: string;
};

export declare const ySmile: {
    name: 'smile';
    data: string;
};

export declare const ySnow: {
    name: 'snow';
    data: string;
};

export declare const ySortDefault: {
    name: 'sort_default';
    data: string;
};

export declare const ySoundOff: {
    name: 'sound_off';
    data: string;
};

export declare const ySoundOn: {
    name: 'sound_on';
    data: string;
};

export declare const ySpinner: {
    name: 'spinner';
    data: string;
};

export declare const yStar: {
    name: 'star';
    data: string;
};

export declare const yStarFilled: {
    name: 'star_filled';
    data: string;
};

export declare const yStatus: {
    name: 'status';
    data: string;
};

export declare const ySupport: {
    name: 'support';
    data: string;
};

export declare const ySupportContact: {
    name: 'support_contact';
    data: string;
};

export declare const yTableDynamic: {
    name: 'table_dynamic';
    data: string;
};

export declare const yTableStatic: {
    name: 'table_static';
    data: string;
};

export declare const yTag: {
    name: 'tag';
    data: string;
};

export declare const yTelegram: {
    name: 'telegram';
    data: string;
};

export declare const yTextBold: {
    name: 'text_bold';
    data: string;
};

export declare const yTextH1: {
    name: 'text_h_1';
    data: string;
};

export declare const yTextItalic: {
    name: 'text_italic';
    data: string;
};

export declare const yTextStrikethrough: {
    name: 'text_strikethrough';
    data: string;
};

export declare const yTextUnderline: {
    name: 'text_underline';
    data: string;
};

export declare const yThrobber: {
    name: 'throbber';
    data: string;
};

export declare const yTimeAddClock: {
    name: 'time_add_clock';
    data: string;
};

export declare const yTimeBlock: {
    name: 'time_block';
    data: string;
};

export declare const yTimeEdit: {
    name: 'time_edit';
    data: string;
};

export declare const yTrash: {
    name: 'trash';
    data: string;
};

export declare const yTriangle: {
    name: 'triangle';
    data: string;
};

export declare const yTrianglePlus: {
    name: 'triangle_plus';
    data: string;
};

export declare const yTwoArrowsTransfer: {
    name: 'two_arrows_transfer';
    data: string;
};

export declare const yUmbrella: {
    name: 'umbrella';
    data: string;
};

export declare const yUnlinkAttachment: {
    name: 'unlink_attachment';
    data: string;
};

export declare const yUnlock: {
    name: 'unlock';
    data: string;
};

export declare const yUpload: {
    name: 'upload';
    data: string;
};

export declare const yUserAdd: {
    name: 'user_add';
    data: string;
};

export declare const yUserDelete: {
    name: 'user_delete';
    data: string;
};

export declare const yUserDiscountSale: {
    name: 'user_discount_sale';
    data: string;
};

export declare const yUserToUser: {
    name: 'user_to_user';
    data: string;
};

export declare const yVerticalDots: {
    name: 'vertical_dots';
    data: string;
};

export declare const yVk: {
    name: 'vk';
    data: string;
};

export declare const yVolumeFull: {
    name: 'volume_full';
    data: string;
};

export declare const yVolumeMute: {
    name: 'volume_mute';
    data: string;
};

export declare const yWallet: {
    name: 'wallet';
    data: string;
};

export declare const yWarning: {
    name: 'warning';
    data: string;
};

export declare const yWarningAlert: {
    name: 'warning_alert';
    data: string;
};

export declare const yWeatherClimateMoon: {
    name: 'weather_climate_moon';
    data: string;
};

export declare const yWeatherClimateSun: {
    name: 'weather_climate_sun';
    data: string;
};

export declare const yWhatsApp: {
    name: 'whats_app';
    data: string;
};

export declare const yWork: {
    name: 'work';
    data: string;
};

export declare const yWorkCase: {
    name: 'work_case';
    data: string;
};

export declare const yYbox: {
    name: 'ybox';
    data: string;
};

export declare const yZoomIn: {
    name: 'zoom_in';
    data: string;
};

export declare const yZoomInOut: {
    name: 'zoom_in_out';
    data: string;
};

export declare const yZoomOut: {
    name: 'zoom_out';
    data: string;
};


export * from "@floating-ui/dom";
export * from "@maskito/kit";

export { }
