import { Fragment, useEffect, useMemo, useRef, useState } from "react"
import {
  y3Dots,
  yAnalytics,
  yArchive,
  yBell,
  yBrowserInternetWebSite,
  yCalendar1,
  yChat,
  yChevronLeft,
  yClients,
  yCopy,
  yEdit,
  yHelp,
  yInfo,
  yLayout,
  yLineChart,
  yList,
  yLoyaltyLoyaltyCard,
  yMoneyCoins,
  yPause,
  yPhone,
  yPlay,
  yPlus,
  yProfile,
  ySearch,
  ySettings,
  ySupport,
  yVerticalDots,
  yWorkCase,
} from "./vendor/yclients-ui/index.mjs"

type Status =
  | "Черновик"
  | "Запланирован"
  | "Активен"
  | "Приостановлен"
  | "Исчерпан"
  | "Архивирован"
type Screen = "list" | "create" | "edit" | "history" | "access"
type ApplicationScope = "services" | "products" | "services-and-products"
type SelectionMode = "all" | "selected"
type ApplicationSettings = {
  scope: ApplicationScope
  selectionMode: SelectionMode
  serviceCategoryMode: SelectionMode
  serviceCategories: string[]
  serviceMode: SelectionMode
  services: string[]
  productCategoryMode: SelectionMode
  productCategories: string[]
  productMode: SelectionMode
  products: string[]
  employeeMode: SelectionMode
  specializations: string[]
  employees: string[]
  maxDiscountEnabled?: boolean
  maxDiscountAmount?: string
  minOrderEnabled: boolean
  minOrderAmount?: string
  stackable: boolean
}
type Promo = {
  id: number
  name: string
  code: string
  discount: string
  branches: string
  branchList: string[]
  period: string
  used: number
  limit: number | null
  clientLimit?: number | null
  startDate?: string
  endDate?: string
  status: Status
  application?: ApplicationSettings
}
type ToastState = {
  message: string
  draftId?: number
  variant?: "success" | "error"
}

const initialPromos: Promo[] = [
  {
    id: 1,
    name: "Скидка новым клиентам",
    code: "WELCOME20",
    discount: "1 000 ₽",
    branches: "Все филиалы",
    branchList: ["Тверская", "Арбат", "Хамовники", "Патриаршие", "Садовая"],
    period: "01.10.2026 – 31.12.2026",
    used: 126,
    limit: 500,
    status: "Активен",
  },
  {
    id: 2,
    name: "Осенняя акция",
    code: "AUTUMN500",
    discount: "500 ₽",
    branches: "4 филиала",
    branchList: ["Тверская", "Арбат", "Хамовники", "Садовая"],
    period: "15.10.2026 – 30.11.2026",
    used: 0,
    limit: 300,
    status: "Запланирован",
  },
  {
    id: 3,
    name: "Black Friday",
    code: "BLACK30",
    discount: "30%",
    branches: "Все филиалы",
    branchList: ["Все доступные филиалы"],
    period: "20.11.2026 – 30.11.2026",
    used: 0,
    limit: 1000,
    status: "Запланирован",
  },
  {
    id: 4,
    name: "Возвращаем клиентов",
    code: "COMEBACK",
    discount: "15%",
    branches: "5 филиалов",
    branchList: ["Тверская", "Арбат", "Садовая", "Сокол", "Динамо"],
    period: "01.10.2026 – 31.12.2026",
    used: 219,
    limit: 500,
    status: "Архивирован",
  },
  {
    id: 5,
    name: "Летняя акция",
    code: "SUMMER30",
    discount: "30%",
    branches: "Все филиалы",
    branchList: ["Все доступные филиалы"],
    period: "01.10.2026 – 31.12.2026",
    used: 86,
    limit: 500,
    status: "Приостановлен",
  },
  {
    id: 6,
    name: "День рождения сети",
    code: "BIRTHDAY",
    discount: "15%",
    branches: "8 филиалов",
    branchList: [
      "Тверская",
      "Арбат",
      "Хамовники",
      "Патриаршие",
      "Садовая",
      "Сокол",
      "Динамо",
      "Аэропорт",
    ],
    period: "10.12.2026 – 20.12.2026",
    used: 174,
    limit: 250,
    status: "Архивирован",
  },
  {
    id: 7,
    name: "Первый заказ",
    code: "FIRST15",
    discount: "15%",
    branches: "3 филиала",
    branchList: ["Тверская", "Арбат", "Патриаршие"],
    period: "01.11.2026 – 31.12.2026",
    used: 92,
    limit: 400,
    status: "Активен",
  },
  {
    id: 8,
    name: "Уход в подарок",
    code: "CARE700",
    discount: "700 ₽",
    branches: "Все филиалы",
    branchList: ["Все доступные филиалы"],
    period: "05.11.2026 – 25.12.2026",
    used: 63,
    limit: 200,
    status: "Приостановлен",
  },
  {
    id: 9,
    name: "Выходные в SPA",
    code: "WEEKEND25",
    discount: "25%",
    branches: "4 филиала",
    branchList: ["Хамовники", "Патриаршие", "Садовая", "Чистые пруды"],
    period: "01.10.2026 – 30.11.2026",
    used: 150,
    limit: 150,
    status: "Исчерпан",
  },
  {
    id: 10,
    name: "Подарок постоянным клиентам",
    code: "LOYAL500",
    discount: "500 ₽",
    branches: "Все филиалы",
    branchList: ["Все доступные филиалы"],
    period: "01.12.2026 – 31.12.2026",
    used: 31,
    limit: null,
    status: "Активен",
  },
]

const branches = [
  "Тверская",
  "Арбат",
  "Хамовники",
  "Патриаршие",
  "Садовая",
  "Чистые пруды",
  "Маяковская",
  "Бауманская",
]
const allNetworkBranches = "Все филиалы сети"
const serviceCategories = ["Ногтевой сервис", "Парикмахерские услуги"]
const services = ["Маникюр", "Педикюр", "Стрижка", "Окрашивание", "Укладка"]
const productCategories = ["Уход за волосами", "Уход за лицом"]
const products = ["Шампунь", "Кондиционер", "Маска для волос", "Крем для лица"]
const specializations = ["Ногтевой сервис", "Парикмахер", "Косметолог"]
const employees = [
  "Анна Волкова",
  "Мария Орлова",
  "Ирина Соколова",
  "Елена Кузнецова",
]
const statusVariant: Record<Status, string> = {
  Черновик: "muted",
  Активен: "success",
  Запланирован: "discovery",
  Приостановлен: "warning",
  Исчерпан: "danger",
  Архивирован: "muted",
}
const selectItems = (items: string[]) =>
  items.map((label, index) => ({ id: String(index + 1), label, value: label }))
const parsePeriod = (period: string) => {
  const toIsoDate = (value: string) => {
    const [day, month, year] = value.trim().split(".")
    return day && month && year ? `${year}-${month}-${day}` : ""
  }
  const [start, end] = period.split("–")
  return [toIsoDate(start || ""), toIsoDate(end || "")] as const
}
const copyApplicationSettings = (
  settings?: ApplicationSettings,
): ApplicationSettings | undefined =>
  settings
    ? {
        ...settings,
        serviceCategories: [...settings.serviceCategories],
        services: [...settings.services],
        productCategories: [...settings.productCategories],
        products: [...settings.products],
        specializations: [...settings.specializations],
        employees: [...settings.employees],
      }
    : undefined

const getCopyName = (sourceName: string, promos: Promo[]) => {
  const baseName =
    sourceName.replace(/\s+\(Copy(?: \d+)?\)$/, "").trim() || "Промокод"
  const firstCopy = `${baseName} (Copy)`
  const existingNames = new Set(promos.map((promo) => promo.name))
  if (!existingNames.has(firstCopy)) return firstCopy

  let copyNumber = 2
  while (existingNames.has(`${baseName} (Copy ${copyNumber})`)) copyNumber += 1
  return `${baseName} (Copy ${copyNumber})`
}

function Text({
  children,
  size = "p2-regular",
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode
  size?: string
  variant?: string
  className?: string
}) {
  return (
    <y-core-text class={className} size={size} variant={variant}>
      {children}
    </y-core-text>
  )
}

function Button({
  label,
  variant = "primary",
  size = "small",
  iconLeft,
  disabled = false,
  onClick,
}: {
  label: string
  variant?: string
  size?: string
  iconLeft?: unknown
  disabled?: boolean
  onClick?: () => void
}) {
  return (
    <y-core-button
      label={label}
      variant={variant}
      size={size}
      iconLeft={iconLeft}
      disabled={disabled}
      onClick={onClick}
    />
  )
}

function App() {
  const [screen, setScreen] = useState<Screen>("list")
  const [promos, setPromos] = useState(initialPromos)
  const [selectedId, setSelectedId] = useState(1)
  const [query, setQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("Все статусы")
  const [branchFilter, setBranchFilter] = useState("Все филиалы")
  const [periodFilter, setPeriodFilter] = useState("Любой период")
  const [menuId, setMenuId] = useState<number | null>(null)
  const [modal, setModal] = useState<"pause" | "archive" | null>(null)
  const [toast, setToast] = useState<ToastState | null>(null)
  const [manage, setManage] = useState(true)
  const selected = promos.find((item) => item.id === selectedId) || promos[0]

  const showToast = (
    message: string,
    draftId?: number,
    variant: "success" | "error" = "success",
  ) => {
    setToast({ message, draftId, variant })
    window.setTimeout(() => setToast(null), draftId ? 5000 : 2600)
  }

  const matchesCurrentFilters = (promo: Promo) => {
    const normalizedQuery = query.trim().toLowerCase()
    const matchesQuery =
      promo.code.toLowerCase().includes(normalizedQuery) ||
      promo.name.toLowerCase().includes(normalizedQuery)
    const matchesStatus =
      statusFilter === "Все статусы" || promo.status === statusFilter
    const matchesBranch =
      branchFilter === "Все филиалы" ||
      promo.branches === "Все филиалы" ||
      promo.branchList.includes(branchFilter)
    const periodMonth = {
      "Октябрь 2026": "2026-10",
      "Ноябрь 2026": "2026-11",
      "Декабрь 2026": "2026-12",
    }[periodFilter]
    const [promoStart, promoEnd] = parsePeriod(promo.period)
    const matchesPeriod =
      periodFilter === "Любой период" ||
      (periodMonth
        ? Boolean(promoStart && promoEnd) &&
          promoStart <= `${periodMonth}-31` &&
          promoEnd >= `${periodMonth}-01`
        : true)
    return matchesQuery && matchesStatus && matchesBranch && matchesPeriod
  }

  const filtered = useMemo(
    () => promos.filter(matchesCurrentFilters),
    [promos, query, statusFilter, branchFilter, periodFilter],
  )

  const openPromo = (promo: Promo) => {
    setSelectedId(promo.id)
    setMenuId(null)
    setScreen("edit")
  }

  const openCreate = () => {
    setMenuId(null)
    setScreen("create")
  }

  const createDraftCopy = (source: Promo, openDraft: boolean) => {
    try {
      const draft: Promo = {
        ...source,
        id: Date.now(),
        name: getCopyName(source.name, promos),
        code: "",
        branchList: [...source.branchList],
        used: 0,
        status: "Черновик",
        startDate: source.startDate || parsePeriod(source.period)[0],
        endDate: source.endDate || parsePeriod(source.period)[1],
        application: copyApplicationSettings(source.application),
      }
      setPromos((items) => [draft, ...items])
      setSelectedId(draft.id)
      setMenuId(null)

      if (openDraft) {
        setScreen("edit")
      } else {
        setScreen("list")
        showToast(
          "Черновик промокода создан",
          matchesCurrentFilters(draft) ? undefined : draft.id,
        )
      }
    } catch {
      showToast(
        "Не удалось создать черновик. Попробуйте ещё раз.",
        undefined,
        "error",
      )
    }
  }

  const changeStatus = (status: Status) => {
    setPromos((items) =>
      items.map((promo) =>
        promo.id === selected.id ? { ...promo, status } : promo,
      ),
    )
    setModal(null)
    showToast(
      status === "Приостановлен"
        ? "Промокод приостановлен"
        : status === "Архивирован"
          ? "Промокод архивирован"
          : "Промокод активирован",
    )
  }

  const changeSelectedStatus = (status: Status) => {
    setMenuId(null)
    if (status === "Активен") changeStatus(status)
    else setModal(status === "Приостановлен" ? "pause" : "archive")
  }

  return (
    <div className="app-shell">
      <Sidebar screen={screen} onList={() => setScreen("list")} />
      <div className="workspace">
        <Topbar
          screen={screen}
          manage={manage}
          onManage={() => setManage((value) => !value)}
          onAccess={() => setScreen("access")}
          onPromos={() => setScreen("list")}
        />
        <main className="content-scroll">
          {screen === "list" && (
            <PromoList
              promos={filtered}
              query={query}
              setQuery={setQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              branchFilter={branchFilter}
              setBranchFilter={setBranchFilter}
              periodFilter={periodFilter}
              setPeriodFilter={setPeriodFilter}
              manage={manage}
              openPromo={openPromo}
              openCreate={openCreate}
              menuId={menuId}
              setMenuId={setMenuId}
              onDuplicate={(promo) => createDraftCopy(promo, false)}
              onEdit={openPromo}
              onStatus={(promo, status) => {
                setSelectedId(promo.id)
                if (status === "Активен") {
                  setPromos((items) =>
                    items.map((item) =>
                      item.id === promo.id ? { ...item, status } : item,
                    ),
                  )
                  showToast("Промокод активирован")
                } else {
                  setModal(status === "Приостановлен" ? "pause" : "archive")
                }
              }}
              onReset={() => {
                setQuery("")
                setStatusFilter("Все статусы")
                setBranchFilter("Все филиалы")
                setPeriodFilter("Любой период")
              }}
            />
          )}
          {(screen === "create" || screen === "edit") && (
            <PromoForm
              key={`${screen}-${selected.id}`}
              mode={screen}
              source={selected}
              promos={promos}
              manage={manage}
              menuId={menuId}
              setMenuId={setMenuId}
              onCancel={() => {
                setMenuId(null)
                setScreen("list")
              }}
              onOpenHistory={() => {
                setMenuId(null)
                setScreen("history")
              }}
              onDuplicate={() => createDraftCopy(selected, true)}
              onStatus={changeSelectedStatus}
              onCreated={(promo) => {
                setPromos((items) => [promo, ...items])
                setSelectedId(promo.id)
                setScreen("edit")
                showToast("Промокод создан")
              }}
              onSaveDraft={(promo) => {
                try {
                  setPromos((items) => {
                    const exists = items.some((item) => item.id === promo.id)
                    return exists
                      ? items.map((item) => (item.id === promo.id ? promo : item))
                      : [promo, ...items]
                  })
                  setSelectedId(promo.id)
                  setScreen("list")
                  showToast("Черновик сохранён")
                } catch {
                  showToast(
                    "Не удалось сохранить черновик. Попробуйте ещё раз.",
                    undefined,
                    "error",
                  )
                }
              }}
              onFinishDraft={(promo) => {
                setPromos((items) =>
                  items.map((item) => (item.id === promo.id ? promo : item)),
                )
                setSelectedId(promo.id)
                setScreen("edit")
                showToast("Промокод создан")
              }}
              onSaved={(promo) => {
                setPromos((items) =>
                  items.map((item) => (item.id === promo.id ? promo : item)),
                )
                showToast("Изменения сохранены")
              }}
            />
          )}
          {screen === "history" && (
            <PromoView
              promo={selected}
              tab={1}
              setTab={(value) => {
                if (value === 0) setScreen("edit")
              }}
              manage={manage}
              onBack={() => setScreen("list")}
              onEdit={() => setScreen("edit")}
              onDuplicate={() => createDraftCopy(selected, true)}
              onPause={() => setModal("pause")}
              onArchive={() => setModal("archive")}
              onActivate={() => changeStatus("Активен")}
              menuId={menuId}
              setMenuId={setMenuId}
            />
          )}
          {screen === "access" && <NoAccess onBack={() => setScreen("list")} />}
        </main>
      </div>
      <UtilityRail />
      {modal && (
        <ConfirmModal
          type={modal}
          onCancel={() => setModal(null)}
          onConfirm={() =>
            changeStatus(modal === "pause" ? "Приостановлен" : "Архивирован")
          }
        />
      )}
      {toast && (
        <div className="toast-notification">
          <y-core-toast
            variant={toast.variant || "success"}
            titleText={toast.message}
            onclose={() => setToast(null)}
          />
          {toast.draftId && (
            <Button
              label="Открыть черновик"
              variant="outline-filled"
              onClick={() => {
                setSelectedId(toast.draftId!)
                setToast(null)
                setScreen("edit")
              }}
            />
          )}
        </div>
      )}
    </div>
  )
}

function Sidebar({ screen, onList }: { screen: Screen; onList: () => void }) {
  const items = [
    ["Аналитика", yAnalytics],
    ["Клиенты", yClients],
    ["Обзор", yLayout],
    ["Сотрудники", yProfile],
    ["Услуги", yWorkCase],
    ["Склад", yArchive],
    ["Лояльность", yLoyaltyLoyaltyCard],
    ["Счета клиентов", yMoneyCoins],
    ["Онлайн-продажи", yBrowserInternetWebSite],
    ["Телефония", yPhone],
  ] as const
  const loyaltyItems = [
    "Типы карт",
    "Карты лояльности",
    "Акции",
    "Автоприменение акций",
    "Промокоды",
    "Транзакции",
    "Реферальная программа",
    "Типы сертификатов",
    "Сертификаты",
    "Типы абонементов",
    "Абонементы",
  ] as const
  return (
    <aside className="sidebar">
      <div className="network-name">
        <y-core-icon icon={yLoyaltyLoyaltyCard} size="20px" />
        <Text size="a1-medium">Сеть Enjoy Luxury Spa & Beauty Studio</Text>
      </div>
      <nav className="side-nav">
        {items.map(([label, icon]) => (
          <Fragment key={label}>
            <y-core-side-menu-item
              label={label}
              icon={icon}
              opened={label === "Лояльность"}
              isActive={label === "Лояльность"}
            />
            {label === "Лояльность" && (
              <div className="submenu">
                {loyaltyItems.map((loyaltyLabel) =>
                  loyaltyLabel === "Промокоды" ? (
                    <div key={loyaltyLabel} onClick={onList}>
                      <y-core-side-menu-item
                        label={loyaltyLabel}
                        isActive={screen !== "access"}
                      />
                    </div>
                  ) : (
                    <y-core-side-menu-item
                      key={loyaltyLabel}
                      label={loyaltyLabel}
                    />
                  ),
                )}
              </div>
            )}
          </Fragment>
        ))}
        <div className="side-separator" />
        <y-core-side-menu-item label="Настройки" icon={ySettings} />
        <y-core-side-menu-item label="Личный кабинет" icon={yProfile} />
        <div className="side-separator" />
        <y-core-side-menu-item label="Центр помощи" icon={yHelp} />
      </nav>
    </aside>
  )
}

function Topbar({
  screen,
  manage,
  onManage,
  onAccess,
  onPromos,
}: {
  screen: Screen
  manage: boolean
  onManage: () => void
  onAccess: () => void
  onPromos: () => void
}) {
  const promoFormOpen = screen === "create" || screen === "edit"

  return (
    <header className="topbar">
      {promoFormOpen ? (
        <div className="breadcrumbs">
          <Button
            label="Лояльность"
            variant="text"
            size="small"
            onClick={onPromos}
          />
          <Text size="s1-medium" variant="secondary">
            /
          </Text>
          <Button
            label="Промокоды"
            variant="text"
            size="small"
            onClick={onPromos}
          />
        </div>
      ) : (
        <>
          <Text size="a1-medium" variant="secondary">
            Лояльность
          </Text>
          <div className="flex items-center gap-2">
            <Button
              label={manage ? "Права: управление" : "Права: просмотр"}
              variant="text"
              onClick={onManage}
            />
            <y-core-icon-button
              icon={yInfo}
              variant="text"
              tooltipText="Показать состояние без доступа"
              onClick={onAccess}
            />
          </div>
        </>
      )}
    </header>
  )
}

function UtilityRail() {
  return (
    <aside className="utility-rail">
      <div className="flex flex-col gap-3">
        <y-core-icon-button icon={yBell} variant="text" />
        <y-core-icon-button icon={yChat} variant="text" />
      </div>
      <div className="flex flex-col gap-3">
        <y-core-icon-button icon={ySupport} variant="text" />
        <y-core-icon-button icon={yInfo} variant="text" />
      </div>
    </aside>
  )
}

type ListProps = {
  promos: Promo[]
  query: string
  setQuery: (v: string) => void
  statusFilter: string
  setStatusFilter: (v: string) => void
  branchFilter: string
  setBranchFilter: (v: string) => void
  periodFilter: string
  setPeriodFilter: (v: string) => void
  manage: boolean
  openPromo: (p: Promo) => void
  openCreate: () => void
  menuId: number | null
  setMenuId: (id: number | null) => void
  onDuplicate: (p: Promo) => void
  onEdit: (p: Promo) => void
  onStatus: (p: Promo, s: Status) => void
  onReset: () => void
}

function PromoList(props: ListProps) {
  const activeFilters =
    props.query ||
    props.statusFilter !== "Все статусы" ||
    props.branchFilter !== "Все филиалы" ||
    props.periodFilter !== "Любой период"
  return (
    <div className="page">
      <div className="page-heading">
        <div>
          <Text size="h1-semibold" className="display-title">
            Промокоды
          </Text>
        </div>
        {props.manage && (
          <Button
            label="Создать промокод"
            iconLeft={yPlus}
            onClick={props.openCreate}
          />
        )}
      </div>
      <div className="list-controls">
        <div className="list-search-field">
          <y-core-text-field
            size="small"
            placeholder="Поиск по названию или коду"
            type="search"
            value={props.query}
            iconLeft={ySearch}
            oninput={(event: any) =>
              props.setQuery(event.detail?.value ?? event.target?.value ?? "")
            }
          />
        </div>
        <div className="list-filter-row">
          <y-core-select-field
            size="small"
            items={selectItems([
              "Все статусы",
              "Черновик",
              "Запланирован",
              "Активен",
              "Приостановлен",
              "Исчерпан",
              "Архивирован",
            ])}
            itemValue="value"
            itemLabel="label"
            value={props.statusFilter}
            displayValue={props.statusFilter}
            onselect={(event: any) =>
              props.setStatusFilter(event.detail?.value ?? "Все статусы")
            }
          />
          <y-core-select-field
            size="small"
            items={selectItems(["Все филиалы", ...branches])}
            itemValue="value"
            itemLabel="label"
            value={props.branchFilter}
            displayValue={props.branchFilter}
            onselect={(event: any) =>
              props.setBranchFilter(event.detail?.value ?? "Все филиалы")
            }
          />
          <y-core-select-field
            size="small"
            items={selectItems([
              "Любой период",
              "Октябрь 2026",
              "Ноябрь 2026",
              "Декабрь 2026",
            ])}
            itemValue="value"
            itemLabel="label"
            value={props.periodFilter}
            displayValue={props.periodFilter}
            onselect={(event: any) =>
              props.setPeriodFilter(event.detail?.value ?? "Любой период")
            }
          />
        </div>
      </div>
      {props.promos.length ? (
        <div className="table-card">
          <div className="promo-table table-header">
            {[
              "Название ↓",
              "Промокод",
              "Скидка ↓",
              "Период действия ↓",
              "Использования ↓",
              "Статус",
              "",
            ].map((label) => (
              <Text key={label} size="p2-medium">
                {label}
              </Text>
            ))}
          </div>
          {props.promos.map((promo) => (
            <div
              className="promo-table table-row"
              key={promo.id}
              onClick={() => props.openPromo(promo)}
            >
              <Text size="p2-regular">{promo.name || "Не задано"}</Text>
              <Text size="p2-regular">{promo.code || "Не задан"}</Text>
              <Text size="p2-regular">{promo.discount || "Не задано"}</Text>
              <Text size="p2-regular">{promo.period || "Не задан"}</Text>
              <Text size="p2-regular">
                {promo.status === "Черновик"
                  ? "0"
                  : `${promo.used} / ${promo.limit ?? "Без ограничений"}`}
              </Text>
              <y-core-tag variant={statusVariant[promo.status]} size="small">
                {promo.status}
              </y-core-tag>
              <div
                className="row-actions"
                onClick={(event) => event.stopPropagation()}
              >
                <y-core-icon-button
                  icon={y3Dots}
                  variant="text"
                  tooltipText="Действия"
                  onClick={() =>
                    props.setMenuId(props.menuId === promo.id ? null : promo.id)
                  }
                />
                {props.menuId === promo.id && (
                  <ActionMenu
                    promo={promo}
                    manage={props.manage}
                    onDismiss={() => props.setMenuId(null)}
                    onEdit={() => props.onEdit(promo)}
                    onDuplicate={() => props.onDuplicate(promo)}
                    onStatus={(status) => props.onStatus(promo, status)}
                  />
                )}
              </div>
            </div>
          ))}
          <div className="pagination-row">
            <div className="pagination-size">
              <div className="pagination-size-select">
                <y-core-select-field
                  size="small"
                  items={selectItems(["10"])}
                  itemValue="value"
                  itemLabel="label"
                  value="10"
                  displayValue="10"
                />
              </div>
              <Text size="p2-regular" variant="secondary">
                промокодов на странице
              </Text>
            </div>
            <Text size="a2-regular" variant="secondary">
              1–{props.promos.length} из {props.promos.length}
            </Text>
            <y-core-pagination
              page={1}
              itemsPerPage={10}
              total={props.promos.length}
            />
          </div>
        </div>
      ) : (
        <EmptyResults
          filtered={Boolean(activeFilters)}
          manage={props.manage}
          onReset={props.onReset}
          onCreate={props.openCreate}
        />
      )}
    </div>
  )
}

function EmptyResults({
  filtered,
  manage,
  onReset,
  onCreate,
}: {
  filtered: boolean
  manage: boolean
  onReset: () => void
  onCreate: () => void
}) {
  return (
    <div className="empty-wrap">
      <y-core-empty-state
        title={filtered ? "Ничего не найдено" : "Промокодов пока нет"}
        description={
          filtered
            ? "Попробуйте изменить параметры поиска или фильтры."
            : "Создайте первый промокод, чтобы предоставить клиентам скидку на заданных условиях."
        }
        icon={filtered ? ySearch : yLoyaltyLoyaltyCard}
        size="medium"
      />
      {filtered ? (
        <Button label="Сбросить фильтры" onClick={onReset} />
      ) : (
        manage && <Button label="Создать промокод" onClick={onCreate} />
      )}
    </div>
  )
}

function ActionMenu({
  promo,
  manage,
  onEdit,
  onDuplicate,
  onStatus,
  onDismiss,
  showEdit = true,
}: {
  promo: Promo
  manage: boolean
  onEdit?: () => void
  onDuplicate: () => void
  onStatus: (s: Status) => void
  onDismiss: () => void
  showEdit?: boolean
}) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onDismiss()
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick)
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick)
  }, [onDismiss])

  if (!manage)
    return (
      <div ref={menuRef} className="action-menu">
        <Text size="a2-regular" variant="secondary">
          Недостаточно прав для изменений
        </Text>
      </div>
    )
  return (
    <div ref={menuRef} className="action-menu">
      {promo.status !== "Архивирован" && (
        <>
          {showEdit && onEdit && (
            <MenuAction icon={yEdit} label="Редактировать" onClick={onEdit} />
          )}
          <MenuAction icon={yCopy} label="Дублировать" onClick={onDuplicate} />
          {promo.status === "Активен" && (
            <MenuAction
              icon={yPause}
              label="Приостановить"
              onClick={() => onStatus("Приостановлен")}
            />
          )}
          {promo.status === "Приостановлен" && (
            <MenuAction
              icon={yPlay}
              label="Активировать"
              onClick={() => onStatus("Активен")}
            />
          )}
          {promo.status !== "Черновик" && (
            <MenuAction
              icon={yArchive}
              label="Архивировать"
              onClick={() => onStatus("Архивирован")}
              danger
            />
          )}
        </>
      )}
      {promo.status === "Архивирован" && (
        <>
          <MenuAction icon={yCopy} label="Дублировать" onClick={onDuplicate} />
          <Text size="a2-regular" variant="secondary">
            Архивный промокод доступен только для просмотра
          </Text>
        </>
      )}
    </div>
  )
}

function MenuAction({
  icon,
  label,
  onClick,
  danger = false,
}: {
  icon: any
  label: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <div className="menu-action" onClick={onClick}>
      <y-core-icon icon={icon} size="16px" />
      <Text size="a1-regular" variant={danger ? "negative" : "primary"}>
        {label}
      </Text>
    </div>
  )
}

function PromoView({
  promo,
  tab,
  setTab,
  manage,
  onBack,
  onEdit,
  onDuplicate,
  onPause,
  onArchive,
  onActivate,
  menuId,
  setMenuId,
}: {
  promo: Promo
  tab: number
  setTab: (v: number) => void
  manage: boolean
  onBack: () => void
  onEdit: () => void
  onDuplicate: () => void
  onPause: () => void
  onArchive: () => void
  onActivate: () => void
  menuId: number | null
  setMenuId: (v: number | null) => void
}) {
  return (
    <div className="page">
      <div className="breadcrumbs" onClick={onBack}>
        <Text size="a2-regular" variant="secondary">
          Промокоды
        </Text>
        <Text size="a2-regular" variant="secondary">
          →
        </Text>
        <Text size="a2-medium">{promo.code || "Не задан"}</Text>
      </div>
      <div className="page-heading">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <Text size="h1-semibold" className="display-title">
              {promo.name || "Не задано"}
            </Text>
            <y-core-tag variant={statusVariant[promo.status]} size="medium">
              {promo.status}
            </y-core-tag>
          </div>
          <Text size="p1-medium" variant="secondary">
            {promo.code || "Не задан"}
          </Text>
        </div>
        {manage && (
          <div className="flex gap-2">
            {promo.status !== "Архивирован" && (
              <Button
                label="Редактировать"
                variant="outline"
                iconLeft={yEdit}
                onClick={onEdit}
              />
            )}
            <div className="relative">
              <y-core-icon-button
                icon={yVerticalDots}
                variant="outline-filled"
                onClick={() => setMenuId(menuId ? null : promo.id)}
              />
              {menuId && (
                <ActionMenu
                  promo={promo}
                  manage
                  onDismiss={() => setMenuId(null)}
                  onEdit={onEdit}
                  onDuplicate={onDuplicate}
                  onStatus={(status) =>
                    status === "Активен"
                      ? onActivate()
                      : status === "Приостановлен"
                        ? onPause()
                        : onArchive()
                  }
                />
              )}
            </div>
          </div>
        )}
      </div>
      <y-core-tabs
        tabs={[
          { text: "Настройки", value: "0", active: tab === 0 },
          { text: "История применений", value: "1", active: tab === 1 },
        ]}
        value={tab}
        onchange-active-tab={(event: any) =>
          setTab(Number(event.detail.value))
        }
      />
      {tab === 0 ? <SettingsView promo={promo} /> : <History promo={promo} />}
    </div>
  )
}

function SettingsView({ promo }: { promo: Promo }) {
  return (
    <div className="details-grid">
      <ReadSection title="Основное">
        <ReadValue label="Название" value={promo.name || "Не задано"} />
        <ReadValue label="Промокод" value={promo.code || "Не задан"} />
      </ReadSection>
      <ReadSection title="Скидка">
        <ReadValue
          label="Тип скидки"
          value={
            !promo.discount
              ? "Не задан"
              : promo.discount.includes("%")
                ? "Процент"
                : "Фиксированная сумма"
          }
        />
        <ReadValue label="Размер скидки" value={promo.discount || "Не задан"} />
        <ReadValue label="Суммирование с другими скидками" value="Разрешено" />
      </ReadSection>
      <ReadSection title="Где действует">
        <ReadValue label="Сеть" value="YCLIENTS Beauty Network" />
        <ExpandableValue
          label="Филиалы"
          value={promo.branches}
          items={promo.branchList}
        />
      </ReadSection>
      <ReadSection title="Условия применения">
        <ExpandableValue
          label="Услуги"
          value="5 выбранных услуг"
          items={services}
        />
        <ReadValue label="Категории услуг" value="Все категории" />
        <ExpandableValue
          label="Сотрудники"
          value="4 сотрудника"
          items={employees}
        />
        <ReadValue label="Минимальная сумма заказа" value="2 000 ₽" />
        <ReadValue
          label="Клиенты"
          value="Только новые клиенты · требует продуктового уточнения"
        />
      </ReadSection>
      <ReadSection title="Период действия">
        <ReadValue label="Период" value={promo.period || "Не задан"} />
      </ReadSection>
      <ReadSection title="Лимиты использования">
        <ReadValue
          label="Использований"
          value={`${promo.used} из ${promo.limit ?? "Без ограничений"}`}
        />
        <ReadValue
          label="Общий лимит"
          value={promo.limit ? String(promo.limit) : "Без ограничений"}
        />
        <ReadValue label="Лимит на клиента" value="1" />
      </ReadSection>
    </div>
  )
}

function ReadSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="read-section">
      <Text size="h4-semibold">{title}</Text>
      <div className="read-grid">{children}</div>
    </section>
  )
}
function ReadValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="read-value">
      <Text size="a2-regular" variant="secondary">
        {label}
      </Text>
      <Text size="p2-regular">{value}</Text>
    </div>
  )
}
function ExpandableValue({
  label,
  value,
  items,
}: {
  label: string
  value: string
  items: string[]
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="read-value">
      <Text size="a2-regular" variant="secondary">
        {label}
      </Text>
      <div className="flex items-center gap-2">
        <Text size="p2-regular">{value}</Text>
        <Button
          label={open ? "Скрыть" : "Показать"}
          variant="text"
          onClick={() => setOpen((v) => !v)}
        />
      </div>
      {open && (
        <div className="item-list">
          {items.map((item) => (
            <y-core-chip key={item} labelText={item} size="small" />
          ))}
        </div>
      )}
    </div>
  )
}

function History({ promo }: { promo: Promo }) {
  const rows =
    promo.status === "Черновик" || promo.id === 3
      ? []
      : [
          [
            "18.10.2026, 14:32",
            "Тверская",
            "Онлайн-запись",
            "Запись №124598",
            "800 ₽",
            "Применён",
          ],
          [
            "17.10.2026, 11:04",
            "Арбат",
            "YPLACES",
            "Запись №124311",
            "650 ₽",
            "Применён",
          ],
          [
            "16.10.2026, 17:45",
            "Хамовники",
            "ERP",
            "Визит №91241",
            "500 ₽",
            "Отменено",
          ],
          [
            "15.10.2026, 10:21",
            "Патриаршие",
            "AdminApp",
            "Операция №34821",
            "1 000 ₽",
            "Подтверждено",
          ],
          [
            "14.10.2026, 19:06",
            "Тверская",
            "PWA",
            "Запись №123954",
            "400 ₽",
            "Подтверждено",
          ],
        ]
  if (!rows.length)
    return (
      <div className="empty-wrap">
        <y-core-empty-state
          title="Промокод ещё не использовали"
          description="Здесь появится история применений промокода."
          icon={yLineChart}
        />
      </div>
    )
  return (
    <div className="table-card history-table">
      <div className="history-row table-header">
        {[
          "Дата и время",
          "Филиал",
          "Канал",
          "Запись / визит / операция",
          "Сумма скидки",
          "Состояние операции",
        ].map((label) => (
          <Text key={label} size="p2-medium">
            {label}
          </Text>
        ))}
      </div>
      {rows.map((row) => (
        <div className="history-row table-row" key={row[0]}>
          {row.slice(0, 3).map((value) => (
            <Text key={value} size="p2-regular">
              {value}
            </Text>
          ))}
          <Text size="p2-medium">{row[3]}</Text>
          <Text size="p2-regular">{row[4]}</Text>
          <y-core-tag variant="muted" size="small">
            {row[5]}
          </y-core-tag>
        </div>
      ))}
      <div className="history-note">
        <Text size="a2-regular" variant="secondary">
          Справочник состояний операции требует уточнения продуктовой логики.
        </Text>
      </div>
    </div>
  )
}

function PromoForm({
  mode,
  source,
  promos,
  manage,
  menuId,
  setMenuId,
  onCancel,
  onOpenHistory,
  onDuplicate,
  onStatus,
  onCreated,
  onSaveDraft,
  onFinishDraft,
  onSaved,
}: {
  mode: "create" | "edit"
  source: Promo
  promos: Promo[]
  manage: boolean
  menuId: number | null
  setMenuId: (v: number | null) => void
  onCancel: () => void
  onOpenHistory: () => void
  onDuplicate: () => void
  onStatus: (s: Status) => void
  onCreated: (p: Promo) => void
  onSaveDraft: (p: Promo) => void
  onFinishDraft: (p: Promo) => void
  onSaved: (p: Promo) => void
}) {
  const editing = mode === "edit"
  const isDraft = editing && source.status === "Черновик"
  const locked = editing && !isDraft && source.used > 0
  const usesSourceSettings = editing
  const sourceApplication = source.application
  const parsedSourcePeriod = parsePeriod(source.period)
  const [sourceStart, sourceEnd] = usesSourceSettings
    ? [
        source.startDate || parsedSourcePeriod[0],
        source.endDate || parsedSourcePeriod[1],
      ]
    : ["", ""]
  const [name, setName] = useState(editing ? source.name : "")
  const [code, setCode] = useState(editing ? source.code : "")
  const [discountType, setDiscountType] = useState(
    usesSourceSettings && source.discount.includes("₽") ? "fixed" : "percent",
  )
  const [discount, setDiscount] = useState(
    editing ? source.discount.replace(/\D/g, "") : "0",
  )
  const [maxDiscount, setMaxDiscount] = useState(
    usesSourceSettings ? sourceApplication?.maxDiscountEnabled ?? false : false,
  )
  const [maxDiscountAmount, setMaxDiscountAmount] = useState(
    usesSourceSettings ? sourceApplication?.maxDiscountAmount || "0" : "0",
  )
  const [selectedBranches, setSelectedBranches] = useState<string[]>(
    editing
      ? source.branches === "Все филиалы"
        ? [allNetworkBranches]
        : source.branchList
      : [allNetworkBranches],
  )
  const [applicationScope, setApplicationScope] = useState<ApplicationScope>(
    usesSourceSettings
      ? sourceApplication?.scope || "services-and-products"
      : "services-and-products",
  )
  const [applicationSelectionMode, setApplicationSelectionMode] =
    useState<SelectionMode>(
      usesSourceSettings
        ? sourceApplication?.selectionMode || "selected"
        : "all",
    )
  const [serviceCategoryMode, setServiceCategoryMode] =
    useState<SelectionMode>(
      usesSourceSettings
        ? sourceApplication?.serviceCategoryMode || "all"
        : "all",
    )
  const [selectedServiceCategories, setSelectedServiceCategories] = useState(
    usesSourceSettings
      ? sourceApplication?.serviceCategories || []
      : [],
  )
  const [serviceMode, setServiceMode] = useState<SelectionMode>(
    usesSourceSettings ? sourceApplication?.serviceMode || "all" : "all",
  )
  const [selectedServices, setSelectedServices] = useState(
    usesSourceSettings ? sourceApplication?.services || [] : [],
  )
  const [productCategoryMode, setProductCategoryMode] =
    useState<SelectionMode>(
      usesSourceSettings
        ? sourceApplication?.productCategoryMode || "all"
        : "all",
    )
  const [selectedProductCategories, setSelectedProductCategories] = useState(
    usesSourceSettings
      ? sourceApplication?.productCategories || []
      : [],
  )
  const [productMode, setProductMode] = useState<SelectionMode>(
    usesSourceSettings ? sourceApplication?.productMode || "all" : "all",
  )
  const [selectedProducts, setSelectedProducts] = useState(
    usesSourceSettings ? sourceApplication?.products || [] : [],
  )
  const [employeeMode, setEmployeeMode] = useState<SelectionMode>(
    usesSourceSettings ? sourceApplication?.employeeMode || "all" : "all",
  )
  const [selectedSpecializations, setSelectedSpecializations] = useState(
    usesSourceSettings
      ? sourceApplication?.specializations || []
      : [],
  )
  const [selectedEmployees, setSelectedEmployees] = useState(
    usesSourceSettings ? sourceApplication?.employees || [] : [],
  )
  const [minOrder, setMinOrder] = useState(
    usesSourceSettings ? sourceApplication?.minOrderEnabled ?? true : false,
  )
  const [minOrderAmount, setMinOrderAmount] = useState(
    usesSourceSettings ? sourceApplication?.minOrderAmount || "0" : "0",
  )
  const [start, setStart] = useState(sourceStart)
  const [end, setEnd] = useState(sourceEnd)
  const [limitMode, setLimitMode] = useState(
    usesSourceSettings && source.limit ? "limited" : "unlimited",
  )
  const [limit, setLimit] = useState(
    String(usesSourceSettings ? source.limit || 500 : 500),
  )
  const [clientLimitMode, setClientLimitMode] = useState(
    usesSourceSettings
      ? source.clientLimit === null
        ? "unlimited"
        : "limited"
      : "limited",
  )
  const [clientLimit, setClientLimit] = useState(
    String(usesSourceSettings ? source.clientLimit ?? 1 : 1),
  )
  const [stackable, setStackable] = useState(
    usesSourceSettings ? sourceApplication?.stackable ?? true : true,
  )
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForCreation = () => {
    const next: Record<string, string> = {}
    if (!name.trim()) next.name = "Заполните поле"
    if (!code.trim()) next.code = "Заполните поле"
    if (
      code.trim() &&
      promos.some(
        (promo) =>
          promo.id !== (editing ? source.id : -1) &&
          promo.code.toLowerCase() === code.trim().toLowerCase(),
      )
    )
      next.code = "Такой промокод уже существует. Введите другой код."
    if (!discount || Number(discount) <= 0)
      next.discount = "Введите значение больше 0"
    if (!selectedBranches.length) next.branches = "Выберите хотя бы один филиал"
    if (!start) next.start = "Укажите дату."
    if (!end) next.end = "Укажите дату."
    if (start && end && end <= start)
      next.end = "Дата окончания должна быть позже даты начала."
    if (limitMode === "limited" && Number(limit) <= 0)
      next.limit = "Введите значение больше 0"
    if (clientLimitMode === "limited" && Number(clientLimit) <= 0)
      next.clientLimit = "Введите значение больше 0"
    if (editing && limitMode === "limited" && Number(limit) < source.used)
      next.limit = `Лимит не может быть меньше количества уже использованных применений — ${source.used}.`
    setErrors(next)
    return !Object.keys(next).length
  }

  const buildPromo = (status: Status): Promo => {
    const period =
      start && end
        ? `${start.split("-").reverse().join(".")}–${end.split("-").reverse().join(".")}`
        : ""
    const allBranchesSelected = selectedBranches.includes(allNetworkBranches)
    return {
      id: editing ? source.id : Date.now(),
      name: name.trim(),
      code: code.trim(),
      discount: discount
        ? `${discount}${discountType === "percent" ? "%" : " ₽"}`
        : "",
      branches: allBranchesSelected
        ? "Все филиалы"
        : selectedBranches.length
          ? `${selectedBranches.length} филиала`
          : "Не задано",
      branchList:
        allBranchesSelected ? ["Все доступные филиалы"] : selectedBranches,
      period,
      startDate: start,
      endDate: end,
      used: status === "Черновик" ? 0 : editing ? source.used : 0,
      limit: limitMode === "limited" ? Number(limit) : null,
      clientLimit: clientLimitMode === "limited" ? Number(clientLimit) : null,
      status,
      application: {
        scope: applicationScope,
        selectionMode: applicationSelectionMode,
        serviceCategoryMode,
        serviceCategories: selectedServiceCategories,
        serviceMode,
        services: selectedServices,
        productCategoryMode,
        productCategories: selectedProductCategories,
        productMode,
        products: selectedProducts,
        employeeMode,
        specializations: selectedSpecializations,
        employees: selectedEmployees,
        maxDiscountEnabled: maxDiscount,
        maxDiscountAmount,
        minOrderEnabled: minOrder,
        minOrderAmount,
        stackable,
      },
    }
  }

  const saveDraft = () => {
    setErrors({})
    onSaveDraft(buildPromo("Черновик"))
  }

  const saveCompleted = () => {
    if (editing && !isDraft) {
      if (!validateForCreation()) return
      onSaved(buildPromo(source.status))
      return
    }
    if (!validateForCreation()) return

    const completedPromo = buildPromo(
      start > "2026-10-20" ? "Запланирован" : "Активен",
    )
    if (isDraft) onFinishDraft(completedPromo)
    else onCreated(completedPromo)
  }

  return (
    <div className="form-page">
      <div className="form-main">
        <div className="form-back-action">
          <Button
            label="Назад"
            variant="text"
            size="small"
            iconLeft={yChevronLeft}
            onClick={onCancel}
          />
        </div>
        <div className="page-heading">
          <div>
            <div className="form-title-row">
              <Text size="h1-semibold" className="display-title">
                {editing ? source.name || "Не задано" : "Новый промокод"}
              </Text>
              {editing && (
                <y-core-tag
                  variant={statusVariant[source.status]}
                  size="medium"
                >
                  {source.status}
                </y-core-tag>
              )}
            </div>
          </div>
          {editing && manage && source.status !== "Архивирован" && (
            <div className="relative">
              <y-core-icon-button
                icon={yVerticalDots}
                variant="outline-filled"
                onClick={() => setMenuId(menuId ? null : source.id)}
              />
              {menuId === source.id && (
                <ActionMenu
                  promo={source}
                  manage={manage}
                  onDismiss={() => setMenuId(null)}
                  onDuplicate={onDuplicate}
                  onStatus={onStatus}
                  showEdit={false}
                />
              )}
            </div>
          )}
        </div>
        {editing && (
          <y-core-tabs
            tabs={[
              { text: "Настройки", value: "0", active: true },
              { text: "История применений", value: "1", active: false },
            ]}
            value={0}
            onchange-active-tab={(event: any) => {
              if (Number(event.detail.value) === 1) onOpenHistory()
            }}
          />
        )}
        {locked && (
          <y-core-callout
            class="editing-restriction-callout"
            variant="neutral"
            open
            header="Редактирование ограничено"
            description="После первого применения можно изменить только период действия и лимиты использования."
          />
        )}
        <FormSection
          id="basic"
          number="1"
          title="Основные настройки"
          headingSize="h2-semibold"
          borderless
          transparent
          hideNumber
        >
          <div className="two-cols basic-fields">
            <y-core-text-field
              size="small"
              labelText="Название"
              annotationText="Видят только администраторы"
              placeholder="Например, Скидка на первое посещение"
              value={name}
              disabled={locked}
              errors={errors.name ? [errors.name] : []}
              oninput={(e: any) => setName(e.detail.value)}
            />
            <y-core-text-field
              size="small"
              labelText="Промокод"
              annotationText={
                locked
                  ? "Этот параметр нельзя изменить после первого применения промокода."
                  : "Его клиенты вводят при записи"
              }
              placeholder="Например, WELCOME20"
              value={code}
              disabled={locked}
              errors={errors.code ? [errors.code] : []}
              oninput={(e: any) => setCode(e.detail.value)}
            />
          </div>
        </FormSection>
        <FormSection
          id="discount"
          number="2"
          title="Скидка"
          disabled={locked}
          borderless
          transparent
          hideNumber
        >
          <div className="field-stack">
            <div className="discount-value-row">
              <div className="discount-value-field">
                <y-core-text-field
                  size="small"
                  labelText="Размер скидки"
                  type="number"
                  value={discount}
                  disabled={locked}
                  errors={errors.discount ? [errors.discount] : []}
                  oninput={(e: any) => setDiscount(e.detail.value)}
                />
              </div>
              <y-core-segment-control
                options={[
                  {
                    text: "%",
                    value: "percent",
                    active: discountType === "percent",
                  },
                  {
                    text: "₽",
                    value: "fixed",
                    active: discountType === "fixed",
                  },
                ]}
                value={discountType}
                manual
                disabled={locked}
                onClick={(event: any) => setDiscountType(event.detail.value)}
              />
            </div>
            <y-core-checkbox
              labelText="Ограничить максимальную сумму скидки"
              checked={maxDiscount}
              disabled={locked}
              onchecked={(event: any) =>
                setMaxDiscount(event.detail.checked)
              }
            />
            {maxDiscount && (
              <div className="compact-field">
                <y-core-text-field
                  size="small"
                  labelText="Максимальная сумма скидки"
                  type="number"
                  value={maxDiscountAmount}
                  rightText="₽"
                  disabled={locked}
                  oninput={(event: any) =>
                    setMaxDiscountAmount(event.detail.value)
                  }
                />
              </div>
            )}
            <y-core-checkbox
              labelText="Суммировать с другими скидками и акциями"
              checked={stackable}
              disabled={locked}
              onchecked={(event: any) =>
                setStackable(event.detail.checked)
              }
            />
          </div>
        </FormSection>
        <FormSection
          id="period"
          number="3"
          title="Период действия"
          borderless
          transparent
          hideNumber
        >
          <div className="period-fields">
            <y-core-date-picker
              size="small"
              mode="range"
              date={start || end ? [start, end] : undefined}
              placeholder="ДД.ММ.ГГГГ - ДД.ММ.ГГГГ"
              errors={[
                ...(errors.start ? [errors.start] : []),
                ...(errors.end ? [errors.end] : []),
              ]}
              onpick={(event: any) => {
                const value = event.detail.value
                if (Array.isArray(value)) {
                  setStart(value[0] || "")
                  setEnd(value[1] || "")
                }
              }}
            />
          </div>
        </FormSection>
        <FormSection
          id="limits"
          number="4"
          title="Лимиты использования"
          borderless
          transparent
          hideNumber
        >
          {editing && (
            <ReadValue label="Использовано" value={String(source.used)} />
          )}
          <div className="two-cols limits-grid">
            <div className="field-stack limit-field-stack">
              <Text size="s1-semibold">Общий лимит</Text>
              <Radio
                label="Без ограничений"
                checked={limitMode === "unlimited"}
                onClick={() => setLimitMode("unlimited")}
              />
              <Radio
                label="Ограничить количество применений"
                checked={limitMode === "limited"}
                onClick={() => setLimitMode("limited")}
              />
              {limitMode === "limited" && (
                <y-core-text-field
                  size="small"
                  type="number"
                  value={limit}
                  errors={errors.limit ? [errors.limit] : []}
                  oninput={(e: any) => setLimit(e.detail.value)}
                />
              )}
            </div>
            <div className="field-stack limit-field-stack">
              <Text size="s1-semibold">Лимит на одного клиента</Text>
              <Radio
                label="Без ограничений"
                checked={clientLimitMode === "unlimited"}
                onClick={() => setClientLimitMode("unlimited")}
              />
              <Radio
                label="Ограничить количество применений"
                checked={clientLimitMode === "limited"}
                onClick={() => setClientLimitMode("limited")}
              />
              {clientLimitMode === "limited" && (
                <y-core-text-field
                  size="small"
                  type="number"
                  value={clientLimit}
                  errors={errors.clientLimit ? [errors.clientLimit] : []}
                  oninput={(e: any) => setClientLimit(e.detail.value)}
                />
              )}
            </div>
          </div>
        </FormSection>
        <FormSection
          id="branches"
          number="5"
          title="Где действует"
          disabled={locked}
          borderless
          transparent
          hideNumber
        >
          <Text size="p2-regular">
            Настройки и лимит промокода будут общими для выбранных филиалов
          </Text>
          <div className="branch-settings">
            <y-core-multiple-select-field
              size="small"
              labelText="Филиалы сети"
              items={selectItems(branches)}
              itemValue="value"
              itemLabel="label"
              value={selectedBranches.filter(
                (branch) => branch !== allNetworkBranches,
              )}
              isFilterable
              placeholder="Не выбрано"
              disabled={locked || selectedBranches.includes(allNetworkBranches)}
              onselect={(event: any) =>
                setSelectedBranches(event.detail.value || [])
              }
              errors={errors.branches ? [errors.branches] : []}
            />
            <y-core-checkbox
              labelText="Все филиалы сети"
              checked={selectedBranches.includes(allNetworkBranches)}
              disabled={locked}
              onchecked={(event: any) =>
                setSelectedBranches(
                  event.detail.checked ? [allNetworkBranches] : [],
                )
              }
            />
          </div>
        </FormSection>
        <FormSection
          id="conditions"
          number="6"
          title="Условия применения"
          headingSize="h2-semibold"
          disabled={locked}
          borderless
          transparent
          hideNumber
        >
          <div className="form-subsection minimum-order-subsection">
            <div className="setting-heading">
              <div>
                <Text size="h3-semibold">Минимальная сумма заказа</Text>
                <Text size="p2-regular">
                  Промокод можно применить, если стоимость заказа не меньше
                  указанной суммы
                </Text>
              </div>
              <y-core-toggle
                checked={minOrder}
                disabled={locked}
                onchecked={(event: any) =>
                  setMinOrder(event.detail.checked)
                }
              />
            </div>
            {minOrder && (
              <div className="compact-field">
                <y-core-text-field
                  size="small"
                  type="number"
                  value={minOrderAmount}
                  disabled={locked}
                  oninput={(event: any) =>
                    setMinOrderAmount(event.detail.value)
                  }
                />
              </div>
            )}
          </div>
          <div className="application-settings">
            <Text size="h3-semibold">Услуги и товары</Text>
            <y-core-segment-control
              options={[
                {
                  text: "Услуги и товары",
                  value: "services-and-products",
                  active: applicationScope === "services-and-products",
                },
                {
                  text: "Только услуги",
                  value: "services",
                  active: applicationScope === "services",
                },
                {
                  text: "Только товары",
                  value: "products",
                  active: applicationScope === "products",
                },
              ]}
              value={applicationScope}
              manual
              disabled={locked}
              onClick={(event: any) =>
                setApplicationScope(event.detail.value)
              }
            />
            <div className="radio-group">
              <Radio
                label="Все"
                checked={applicationSelectionMode === "all"}
                disabled={locked}
                onClick={() => setApplicationSelectionMode("all")}
              />
              <Radio
                label="Только выбранные"
                checked={applicationSelectionMode === "selected"}
                disabled={locked}
                onClick={() => setApplicationSelectionMode("selected")}
              />
            </div>
          </div>
          {applicationSelectionMode === "selected" &&
            applicationScope !== "products" && (
              <EntitySelectionTable
                title="Услуги"
                categoryLabel="Категории услуг"
                itemLabel="Услуги"
                categoryOptions={serviceCategories}
                itemOptions={services}
                categories={selectedServiceCategories}
                items={selectedServices}
                setCategories={(values) => {
                  setServiceCategoryMode("selected")
                  setSelectedServiceCategories(values)
                }}
                setItems={(values) => {
                  setServiceMode("selected")
                  setSelectedServices(values)
                }}
                addLabel="Добавить услугу"
                disabled={locked}
              />
            )}
          {applicationSelectionMode === "selected" &&
            applicationScope !== "services" && (
              <EntitySelectionTable
                className="product-selection-table"
                title="Товары"
                categoryLabel="Категории товаров"
                itemLabel="Товары"
                categoryOptions={productCategories}
                itemOptions={products}
                categories={selectedProductCategories}
                items={selectedProducts}
                setCategories={(values) => {
                  setProductCategoryMode("selected")
                  setSelectedProductCategories(values)
                }}
                setItems={(values) => {
                  setProductMode("selected")
                  setSelectedProducts(values)
                }}
                addLabel="Добавить услугу"
                disabled={locked}
              />
            )}
          <div className="employee-settings promo-employee-settings">
            <Text size="h3-semibold">Сотрудники</Text>
            <y-core-callout
              class="employee-callout"
              variant="information"
              open
              description="Список сотрудников зависит от выбранных филиалов действия промокода"
            />
            <div className="radio-group">
              <Radio
                label="Все"
                checked={employeeMode === "all"}
                disabled={locked}
                onClick={() => setEmployeeMode("all")}
              />
              <Radio
                label="Только выбранные"
                checked={employeeMode === "selected"}
                disabled={locked}
                onClick={() => setEmployeeMode("selected")}
              />
            </div>
            {employeeMode === "selected" && (
              <div className="two-cols entity-select-row">
                <y-core-multiple-select-field
                  size="small"
                  labelText="Специализации"
                  items={selectItems(specializations)}
                  itemValue="value"
                  itemLabel="label"
                  value={selectedSpecializations}
                  placeholder="Все специализации"
                  disabled={locked}
                  onselect={(event: any) =>
                    setSelectedSpecializations(event.detail.value || [])
                  }
                />
                <y-core-multiple-select-field
                  size="small"
                  labelText="Сотрудники"
                  items={selectItems(employees)}
                  itemValue="value"
                  itemLabel="label"
                  value={selectedEmployees}
                  placeholder="Все сотрудники"
                  disabled={locked}
                  onselect={(event: any) =>
                    setSelectedEmployees(event.detail.value || [])
                  }
                />
              </div>
            )}
          </div>
        </FormSection>
        <div className="form-actions">
          {editing && !isDraft ? (
            <>
              <Button label="Сохранить" onClick={saveCompleted} />
              <Button label="Отменить" variant="outline" onClick={onCancel} />
            </>
          ) : (
            <>
              <Button
                label="Создать промокод"
                disabled={!manage}
                onClick={saveCompleted}
              />
              <Button
                label="Сохранить черновик"
                variant="outline"
                disabled={!manage}
                onClick={saveDraft}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function FormSection({
  id,
  number,
  title,
  children,
  disabled = false,
  borderless = false,
  transparent = false,
  hideNumber = false,
  headingSize = "h3-semibold",
}: {
  id: string
  number: string
  title: string
  children: React.ReactNode
  disabled?: boolean
  borderless?: boolean
  transparent?: boolean
  hideNumber?: boolean
  headingSize?: string
}) {
  return (
    <section
      id={id}
      className={[
        "form-section",
        disabled && "is-disabled",
        borderless && "is-borderless",
        transparent && "is-transparent",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="section-title">
        {!hideNumber && (
          <div className="section-number">
            <Text size="a1-medium">{number}</Text>
          </div>
        )}
        <Text size={headingSize}>{title}</Text>
        {disabled && (
          <y-core-tag variant="muted" size="small">
            Нельзя изменить после первого применения
          </y-core-tag>
        )}
      </div>
      <div className="section-content">{children}</div>
    </section>
  )
}

function Radio({
  label,
  checked,
  disabled = false,
  onClick,
}: {
  label: string
  checked: boolean
  disabled?: boolean
  onClick: () => void
}) {
  return (
    <y-core-radio-button
      labelText={label}
      checked={checked}
      disabled={disabled}
      onchecked={(event: any) => {
        if (!disabled && event.detail.checked) onClick()
      }}
    />
  )
}

function EntitySelectionTable({
  className = "",
  title,
  categoryLabel,
  itemLabel,
  categoryOptions,
  itemOptions,
  categories,
  items,
  setCategories,
  setItems,
  addLabel,
  disabled,
}: {
  className?: string
  title: string
  categoryLabel: string
  itemLabel: string
  categoryOptions: string[]
  itemOptions: string[]
  categories: string[]
  items: string[]
  setCategories: (values: string[]) => void
  setItems: (values: string[]) => void
  addLabel: string
  disabled: boolean
}) {
  const addItem = () => {
    const nextCategory = categoryOptions.find(
      (option) => !categories.includes(option),
    )
    const nextItem = itemOptions.find((option) => !items.includes(option))
    if (nextCategory) setCategories([...categories, nextCategory])
    if (nextItem) setItems([...items, nextItem])
  }

  return (
    <div className={`entity-selection-table ${className}`.trim()}>
      <Text size="s1-semibold">{title}</Text>
      <div className="two-cols entity-select-row">
        <y-core-multiple-select-field
          size="small"
          labelText={categoryLabel}
          items={selectItems(categoryOptions)}
          itemValue="value"
          itemLabel="label"
          value={categories}
          placeholder="Не выбрано"
          isFilterable
          disabled={disabled}
          onselect={(event: any) =>
            setCategories(event.detail.value || [])
          }
        />
        <y-core-multiple-select-field
          size="small"
          labelText={itemLabel}
          items={selectItems(itemOptions)}
          itemValue="value"
          itemLabel="label"
          value={items}
          placeholder="Не выбрано"
          isFilterable
          disabled={disabled}
          onselect={(event: any) => setItems(event.detail.value || [])}
        />
      </div>
      <div className="entity-selection-actions">
        <Button
          label={addLabel}
          variant="outline"
          iconLeft={yPlus}
          onClick={addItem}
        />
        <Button
          label="Выбрать из списка"
          variant="outline"
          iconLeft={yList}
          onClick={() => {
            setCategories(categoryOptions)
            setItems(itemOptions)
          }}
        />
      </div>
    </div>
  )
}

function OptionSelect({
  title,
  allLabel,
  selectedLabel,
  mode,
  setMode,
  items,
  selectedItems,
  setSelectedItems,
  disabled,
}: {
  title: string
  allLabel: string
  selectedLabel: string
  mode: SelectionMode
  setMode: (v: SelectionMode) => void
  items: string[]
  selectedItems: string[]
  setSelectedItems: (items: string[]) => void
  disabled: boolean
}) {
  return (
    <div className="option-block">
      <Text size="a1-medium">{title}</Text>
      <Radio
        label={allLabel}
        checked={mode === "all"}
        disabled={disabled}
        onClick={() => setMode("all")}
      />
      <Radio
        label={selectedLabel}
        checked={mode === "selected"}
        disabled={disabled}
        onClick={() => setMode("selected")}
      />
      {mode === "selected" && (
        <y-core-multiple-select-field
          labelText={`Выбрано ${selectedItems.length} элементов`}
          items={selectItems(items)}
          itemValue="value"
          itemLabel="label"
          value={selectedItems}
          isFilterable
          disabled={disabled}
          onchange-value={(event: any) =>
            setSelectedItems(event.detail.value || [])
          }
        />
      )}
    </div>
  )
}

function ConfirmModal({
  type,
  onCancel,
  onConfirm,
}: {
  type: "pause" | "archive"
  onCancel: () => void
  onConfirm: () => void
}) {
  const pause = type === "pause"
  return (
    <y-core-modal open size="small" onclose={onCancel}>
      <div slot="header">
        <Text size="h3-semibold">
          {pause ? "Приостановить промокод?" : "Архивировать промокод?"}
        </Text>
      </div>
      <Text size="p2-regular">
        {pause
          ? "Клиенты временно не смогут использовать этот промокод. Его настройки и история применений сохранятся."
          : "Клиенты больше не смогут использовать этот промокод. Настройки и история применений сохранятся."}
      </Text>
      <div slot="footer" className="modal-footer">
        <Button label="Отмена" variant="outline" onClick={onCancel} />
        <Button
          label={pause ? "Приостановить" : "Архивировать"}
          onClick={onConfirm}
        />
      </div>
    </y-core-modal>
  )
}

function NoAccess({ onBack }: { onBack: () => void }) {
  return (
    <div className="access-state">
      <y-core-empty-state
        title="Нет доступа"
        description="У вас нет прав для просмотра этого промокода. Обратитесь к администратору сети."
        icon={yInfo}
        size="medium"
      />
      <Button
        label="Вернуться к промокодам"
        variant="outline"
        onClick={onBack}
      />
    </div>
  )
}

export default App
