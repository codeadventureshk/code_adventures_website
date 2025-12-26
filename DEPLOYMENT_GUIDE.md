# STEM 教學網站伺服器部署指南

**作者：** Manus AI
**日期：** 2025 年 12 月 26 日

## 簡介

本指南說明如何將 STEM 教學網站部署到您自己的伺服器上。此專案是一個全端應用程式，包含一個基於 **React/Vite** 的前端應用程式和一個基於 **Express** 的 Node.js 後端伺服器。後端伺服器負責提供靜態檔案並處理客戶端路由。

## 先決條件

在開始部署之前，請確保您的伺服器環境滿足以下要求：

| 項目 | 建議版本/說明 |
| :--- | :--- |
| **作業系統** | 任何支援 Node.js 的環境 (如 Linux, Windows Server, macOS) |
| **Node.js** | 建議版本 **18 或更高** |
| **pnpm** | 用於管理專案依賴項。您可以使用 `npm install -g pnpm` 進行安裝。 |
| **反向代理** | 建議使用 **Nginx** 或 **Caddy** 來處理域名和 SSL 憑證。 |
| **程序管理器** | 建議使用 **PM2** 來管理 Node.js 應用程式的生產環境運行。 |

## 部署步驟

### 步驟一：準備專案檔案

1.  將我提供的 `stem_tutorial_website_server_deploy.zip` 檔案下載並解壓縮。
2.  將解壓縮後的專案內容（即 `project` 資料夾內的所有檔案）上傳到您的伺服器上的目標目錄，例如：`/var/www/stem-tutorial`。

### 步驟二：安裝依賴項

在伺服器上，進入專案根目錄並執行以下命令來安裝所有必要的依賴項：

```bash
cd /var/www/stem-tutorial
pnpm install
```

### 步驟三：建構專案

執行以下命令來建構前端靜態檔案和後端伺服器程式碼：

```bash
pnpm run build
```

此命令將執行兩個主要任務：
1.  使用 Vite 建構前端應用程式，靜態檔案將輸出到專案根目錄下的 `dist/public` 資料夾。
2.  使用 esbuild 建構後端伺服器程式碼，輸出到 `dist/index.js` 檔案。

### 步驟四：啟動伺服器

專案的 `package.json` 中定義了生產環境啟動腳本：

```json
"start": "NODE_ENV=production node dist/index.js"
```

您可以直接執行以下命令來啟動伺服器：

```bash
pnpm start
```

伺服器預設會在 **3000 埠**啟動。您現在可以透過 `http://您的伺服器IP:3000` 訪問網站。

## 生產環境建議 (使用 PM2)

在生產環境中，建議使用 **PM2** 等程序管理器來確保應用程式在背景持續運行、在崩潰時自動重啟，並管理日誌。

1.  **安裝 PM2** (如果尚未安裝):
    ```bash
    npm install -g pm2
    ```

2.  **使用 PM2 啟動應用程式**:
    ```bash
    pm2 start dist/index.js --name "stem-tutorial"
    ```

3.  **檢查應用程式狀態**:
    ```bash
    pm2 status
    ```

4.  **設定 PM2 開機自啟**:
    ```bash
    pm2 startup
    # 執行 PM2 輸出的命令
    pm2 save
    ```

## 設定反向代理 (Nginx 範例)

為了讓網站可以透過標準的 80/443 埠和您的域名訪問，您需要設定一個反向代理，將流量從 80/443 轉發到 Node.js 應用程式運行的 3000 埠。

以下是一個 Nginx 配置的範例（請替換 `yourdomain.com`）：

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

將此配置檔案儲存到 Nginx 的站點配置目錄（例如 `/etc/nginx/sites-available/stem-tutorial`），然後啟用它並重新載入 Nginx：

```bash
sudo ln -s /etc/nginx/sites-available/stem-tutorial /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

完成上述步驟後，您的 STEM 教學網站就可以透過您的域名正常訪問了。
