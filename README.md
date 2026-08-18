# 🌌 Thiên Văn Học - Trò Chơi Giáo Dục Tương Tác

**Nền tảng web trò chơi giáo dục HTML5** kết hợp Google Sheets làm cơ sở dữ liệu.

## 📋 Thông tin dự án

- **Chủ đề**: Thiên Văn Học - Hệ Mặt Trời & Vũ Trụ Bao La
- **Đối tượng**: THCS (Lớp 6-9)
- **Mã chủ đề**: `60_thcs_thien_van_hoc`
- **Số câu hỏi mẫu**: 5 câu hỏi tình huống giáo dục

## 🎮 Tính năng chính

### UI/UX Đẳng cấp chuyên nghiệp
- **Thiết kế Glassmorphism** với hiệu ứng kính mờ
- **Nút bấm vật lý 3D** với hiệu ứng nảy xúc giác
- **Floating HUD** hiển thị điểm số, combo, thời gian
- **Bục vinh danh 3D Podium** (Vàng/Bạc/Đồng)
- **Animation confetti** khi trả lời đúng
- **Toast giải thích sư phạm** trượt từ dưới lên

### Hệ thống âm thanh Web Audio API
- Pop/chime khi đáp án đúng (C5-E5-G5-C6)
- Buzzer khi sai
- Fanfare chiến thắng
- BGM 8-bit looping du dương
- TTS Tiếng Việt đọc câu hỏi và giải thích

### Tích hợp Google Sheets
- **Tự động lưu điểm** lên Google Sheet
- **Đồng bộ câu hỏi** từ Sheet về game
- **Quản lý học sinh** qua giao diện Admin
- **Sao lưu/xuất nhập JSON**

## 📁 Cấu trúc thư mục

```
trochoivui/
├── index.html              # Cổng PWA chuyển hướng
├── manifest.json           # Cấu hình PWA Offline
├── sw.js                   # Service Worker (Stale-While-Revalidate)
├── .gitignore
└── games/
    ├── index.html          # Thư viện trò chơi trung tâm
    └── 60_thcs_thien_van_hoc/
        ├── index.html      # Trang chủ đề Thiên Văn Học
        └── game_01_Bat_dau.html  # 🎮 FILE GAME CHÍNH (941 dòng)
```

## 🚀 Hướng dẫn sử dụng

### Cách 1: Chạy trực tiếp (Offline)
Mở file `game_01_Bat_dau.html` bằng trình duyệt bất kỳ.

### Cách 2: Deploy lên hosting
Upload toàn bộ thư mục `trochoivui` lên hosting và truy cập.

### Cách 3: Kết nối Google Sheets
1. Tạo Google Sheet mới, đổi tên thành `ThienVanHoc_Game`
2. Tạo 4 tab: `Cau_Hoi`, `Hoc_Sinh`, `Lich_Su_Diem`, `Cai_Dat`
3. Mở Apps Script (Extension → Apps Script), paste code trong file `upload_apps_script_code.txt`
4. Chạy hàm `seedDemoData()` để tạo dữ liệu mẫu
5. Deploy → New deployment → Web app → **Anyone**
6. Copy link Web App dán vào game

## 🔧 Công nghệ sử dụng

- **HTML5** + **CSS3** (Flexbox, Grid, Animations, Backdrop-filter)
- **Vanilla JavaScript** (ES6+)
- **Web Audio API** (tổng hợp âm thanh không cần file MP3)
- **Web Speech API** (TTS tiếng Việt)
- **Service Worker** (PWA Offline-first)
- **Google Apps Script** (Backend database)

## 🎨 Design System Tokens

| Token | Giá trị | Mô tả |
|-------|---------|-------|
| `--primary` | `#0284C7` | Xanh thiên thanh chủ đạo |
| `--accent` | `#F59E0B` | Vàng hổ phách điểm nhấn |
| `--success` | `#10B981` | Trạng thái đúng |
| `--danger` | `#EF4444` | Trạng thái sai |
| `--warning` | `#F97316` | Cảnh báo thời gian |
| `--bg-start` | `#F0F9FF` | Nền gradient bắt đầu |
| `--bg-mid` | `#FEF9C3` | Nền gradient giữa |

## 📝 Câu hỏi mẫu

1. Hành tinh nào lớn nhất trong Hệ Mặt Trời? → Sao Mộc
2. Hành tinh đỏ thứ tư tính từ Mặt Trời? → Sao Hỏa
3. Hiện tượng Mặt Trăng đi vào giữa Trái Đất và Mặt Trời? → Nhật thực
4. Vệ tinh tự nhiên duy nhất của Trái Đất? → Mặt Trăng
5. Thiên hà chứa Hệ Mặt Trời? → Dải Ngân Hà

## 👨‍💻 Tác giả

Được xây dựng bởi **Siêu Agent Kỹ sư Frontend & Chuyên gia Thiết kế Trải nghiệm Web Game Giáo dục Đỉnh cao**

## 📄 License

MIT License - Tự do sử dụng cho mục đích giáo dục.
