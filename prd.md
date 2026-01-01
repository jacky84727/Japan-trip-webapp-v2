# 旅遊行程看板渲染器 (Notion Based) PRD - v2

## 1. 專案概述 (Overview)
建立一個以 **Notion Database** 為後端的旅遊看板。使用者只需更新 Notion 資料與環境變數，即可動態更新前端。專案優先適配 **iPhone (Mobile First)** 介面。

## 2. 核心功能需求 (Functional Requirements)

### 2.1 Notion 資料對應 (Enhanced Schema)
- **type (欄位區分)**:
    - `country`: 目的地國家資訊。
    - `city`: 目的地城市，用於 Top Bar 顯示。
    - `gmt`: 時差設定。本地預設台北 (GMT+8)，Notion 日期亦以 GMT+8 為準。
    - `exchange`: 目的地幣別 (ISO 4217 代號)。
    - `journey`: 行程具體內容。使用 `category` 分類：`transport` (交通), `visit` (景點), `hotel` (住宿), `restaurant` (餐廳), `shopping` (購物)。

### 2.2 UI 與交互功能
- **Top Bar (固定)**:
    - 顯示旅遊國家、城市、日期與時長。
    - **日期格式化**: 
        - 若起始日與結束日同一年：`mm/dd`。
        - 若跨年：`yyyy/mm/dd`。
- **匯率換算器**:
    - 本地幣別固定為 **NTD**。
    - 抓取 Notion 中的目的地幣別並實作快速換算功能。
- **地圖判斷**:
    - `maps` 欄位需判斷連結類型。
    - 根據 URL 判斷為 Apple Maps 或 Google Maps，並精確喚起對應的 iOS App。
- **Page Cover (圖片預覽)**:
    - 當 `type=journey` 時，需嘗試讀取 Notion Page 的 **Cover Image**。
    - 封面圖做為行程項目的展示圖，若無圖片則不顯示該區域。

### 2.3 技術規格
- **框架**: Next.js (App Router)。
- **樣式**: Vanilla CSS (Premium Style) + TailwindCSS。
- **圖片處理**: 使用 Next.js Image 優化 Notion 封面載入速度。

## 3. 部署與配置
- **極簡配置**: 只需設定 `NOTION_API_KEY` 與 `NOTION_DATABASE_ID`。
- **一鍵部署**: 支援 Zeabur / Vercel。