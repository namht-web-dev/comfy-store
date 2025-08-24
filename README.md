# useLoaderData

- Trong React Router v6.4+ chỉ truy cập được dữ liệu từ loader gắn với route hiện tại (hoặc route tổ tiên trong cây route). Nó không tự động lấy được data từ loader của "component khác" hay "page khác", trừ khi hai component đó thuộc cùng một route hoặc trong nhánh route cha-con.

  - Lấy data trong component của route hiện tại (tạo loader ở route page => gọi ở component - component thuộc page)
