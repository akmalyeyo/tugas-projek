// DATA APLIKASI (FUADH CHIP MENU)
        const products = [
            { 
                id: 1, 
                name: "Singkong Balado", 
                price: 15000, 
                desc: "Renyah dengan bumbu balado pedas manis." 
            },
            { 
                id: 2, 
                name: "Sistick Gurih", 
                price: 12000, 
                desc: "Stik bawang legendaris yang super gurih." 
            },
            { 
                id: 3, 
                name: "Singkong Keju", 
                price: 18000, 
                desc: "Singkong renyah dengan taburan keju melimpah." 
            },
            { 
                id: 4, 
                name: "Sistick Pedas", 
                price: 13000, 
                desc: "Varian sistick buat pecinta pedas." 
            }
        ];

        // Update fungsi renderKatalog agar deskripsi muncul
        function renderKatalog() {
            const container = document.getElementById('product-list');
            container.innerHTML = products.map(p => `
                <div class="card">
                    <div style="background:#eee; height:100px; border-radius:8px; margin-bottom:10px; display:flex; align-items:center; justify-content:center; color:#999;">Foto ${p.name}</div>
                    <h3>${p.name}</h3>
                    <p style="font-size:0.8rem; color:#666;">${p.desc}</p>
                    <p style="font-weight:bold; color:var(--primary);">Rp ${p.price.toLocaleString()}</p>
                    <button class="btn-add" onclick="addToCart(${p.id})">Tambah</button>
                </div>
            `).join('');
        }