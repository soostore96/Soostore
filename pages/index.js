import Image from 'next/image';

const tiles = [
  { title: 'منتجاتي', icon: '/icons/products.png' },
  { title: 'إضافة منتج', icon: '/icons/add.png' },
  { title: 'الطلبات', icon: '/icons/orders.png' },
  { title: 'العملاء', icon: '/icons/customers.png' },
  { title: 'الإعدادات', icon: '/icons/settings.png' },
];

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#fafafa', minHeight: '100vh', padding: 0, margin: 0 }}>
      <h1 style={{ textAlign: 'center', marginTop: 40, color: '#222' }}>مرحبا بك في سوق ستور</h1>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 32, margin: '40px auto', maxWidth: 700
      }}>
        {tiles.map((tile, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #0001', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'box-shadow .2s', cursor: 'pointer', border: '1px solid #eee'
          }}>
            <Image src={tile.icon} alt={tile.title} width={64} height={64} style={{ marginBottom: 16 }} />
            <span style={{ fontSize: 20, fontWeight: 500 }}>{tile.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}