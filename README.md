# Melody Premium - ร้านค้าเพลงออนไลน์คุณภาพสูง

🎵 **Melody Premium** คือแพลตฟอร์มจำหน่ายเพลงและบีทคุณภาพสูงพร้อมระบบสมาชิก VIP

## ✨ ฟีเจอร์หลัก

✅ **ร้านค้าเพลงออนไลน์**
- ยูเซอร์อินเทอร์เฟสแบบมืดที่สวยงาม
- แสดงรายการเพลง 8+ บีท
- ค้นหา ปรับปรุง และจัดหมวดหมู่เพลง

✅ **ระบบตะกร้าสินค้า**
- เพิ่ม ลบ และจัดการปริมาณ
- บันทึกตะกร้าไปยัง LocalStorage อัตโนมัติ
- คำนวณราคาทั้งสิ้นแบบเรียลไทม์

✅ **ระบบสมาชิก VIP**
- ดาวน์โหลดเพลงไม่จำกัด
- ส่วนลดสินค้า 50%
- เข้าถึงเพลงใหม่ก่อนใคร
- ไม่มีโฆษณา

✅ **ระบบชำระเงิน**
- สนับสนุนการชำระเงินผ่าน K-Bank และ PromptPay
- ส่วนลดสำหรับสมาชิก VIP
- ยืนยันการสั่งซื้อแบบสวยงาม

## 🚀 การเริ่มต้นใช้งาน

### ทดลองเลย
1. **เยี่ยมชมเว็บไซต์**: https://taui12345.github.io/
2. **เรียกดูเพลง** ในส่วน "เลือกซื้อเพลง"
3. **ค้นหา** ด้วยชื่อเพลงหรือศิลปิน
4. **เพิ่มไปยังตะกร้า** และชำระเงิน

### ติดตั้งในเครื่อง
```bash
# Clone Repository
git clone https://github.com/taui12345/taui2987298iu.github.io.git

# ไปที่โฟลเดอร์
cd taui2987298iu.github.io

# เปิดในบราวเซอร์
# คลิกขวา index.html > Open with Browser
# หรือใช้ Live Server ใน VS Code
```

## 📁 โครงสร้างไฟล์

```
taui2987298iu.github.io/
├── index.html          # หน้าแรก (HTML)
├── app.js              # ตรรกะจาวาสคริปต์
├── README.md           # เอกสารนี้
└── .gitignore          # ไฟล์ Git Ignore
```

## 🎮 วิธีใช้งาน

### ค้นหาและซื้อเพลง
1. คลิก "เลือกซื้อเพลง"
2. ค้นหาด้วยชื่อเพลงหรือศิลปิน
3. เลือกหมวดหมู่ (Trap, Lo-Fi, Hip-Hop, Chill)
4. คลิก **+** เพื่อเพิ่มลงตะกร้า

### ดูตะกร้าและชำระเงิน
1. คลิกไอคอน 🛍️ ตะกร้า
2. จัดการปริมาณเพลง
3. คลิก "ดำเนินการชำระเงิน"
4. เลือก K-Bank หรือ PromptPay

### สมัครสมาชิก VIP
1. คลิก 👑 "สมัครสมาชิก VIP"
2. ดูสิทธิ์และแพ็กเกจ
3. เลือกแพ็กเกจ (1 เดือน / 3 เดือน / 1 ปี)
4. ชำระเงิน - คุณจะเป็น VIP แล้ว! 🎉

## 💾 LocalStorage Keys

```javascript
// ตะกร้าสินค้า
localStorage.getItem('cart')  // Array ของสินค้า

// สถานะสมาชิก VIP
localStorage.getItem('isVip')  // true/false
```

## 🎵 ข้อมูลเพลง

แต่ละเพลงมีข้อมูลดังนี้:
```javascript
{
  id: 1,
  name: "Neon Dreams",
  artist: "SynthWave Master",
  price: 99,
  category: "trap",
  bpm: 140,
  duration: "3:45"
}
```

## 🎨 ธีมและสไตล์

- **สี**: Pink (#ec4899), Purple (#8b5cf6), Cyan (#06b6d4), Yellow (#fbbf24)
- **ธีมมืด**: พื้นหลัง #06070a
- **UI Framework**: Tailwind CSS 3.x
- **ไอคอน**: Font Awesome 6.4
- **ฟอนต์**: Google Fonts "Prompt" (ภาษาไทย)

## 🔧 Customization

### เพิ่มเพลงใหม่
เปิด `app.js` และเพิ่มลงในอาร์เรย์ `beatsDatabase`:

```javascript
{
    id: 9,
    name: "เพลงใหม่",
    artist: "ศิลปิน",
    price: 99,
    category: "trap",
    bpm: 140,
    duration: "3:45"
}
```

### เปลี่ยนราคา VIP
ไปที่ส่วน "แพ็กเกจสมาชิก" ใน `index.html`

### เปลี่ยนสี
แก้ไข `tailwind.config` ใน HTML หรือไฟล์ CSS

## 📱 ความเข้ากันได้

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android)
- ✅ Mobile (iPhone, Android)
- ✅ ทั้งหมด Responsive

## 🔒 ความปลอดภัย

⚠️ **สำคัญ**: นี่คือ**Demo Version**สำหรับการทดสอบเท่านั้น

สำหรับการใช้งานจริง:
- ✅ เพิ่มการยืนยันตัวตน (Authentication)
- ✅ เข้ารหัสข้อมูลที่ละเอียดอ่อน
- ✅ ใช้ HTTPS เท่านั้น
- ✅ ตรวจสอบอินพุตจากผู้ใช้
- ✅ บันทึกการทำรายการ (Logging)

## 🚀 ปรับปรุงในอนาคต

- [ ] เชื่อมต่อ API จริง
- [ ] ระบบบัญชีผู้ใช้ (Firebase)
- [ ] Forum Community
- [ ] Playlist ส่วนตัว
- [ ] ระบบแสดงความคิดเห็น
- [ ] Premium Content
- [ ] Affiliate Program

## 📞 ติดต่อ

- **GitHub**: [taui12345](https://github.com/taui12345)
- **Email**: support@melodybeat.shop

## 📄 ใบอนุญาต

MIT License - ใช้งานได้อย่างอิสระ

---

**🎵 ขอบคุณที่ใช้ Melody Premium!**

ถ้าคุณชอบโครงการนี้ ⭐ Star ที่ GitHub repo นี้ได้เลย!
