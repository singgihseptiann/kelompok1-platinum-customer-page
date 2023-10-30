export const day_name = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

export const month_name = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const dataBank1 = [
  {
    id: 1,
    name: "BCA",
    desc: "BCA Transfer",
    atm: "ATM BCA",
    mb: "M-BCA",
    klik: "BCA Klik",
    ib: "Internet Banking",
    rek: "54104257877",
  },
];

export const dataBank2 = [
  {
    id: 2,
    name: "BNI",
    desc: "BNI Transfer",
    atm: "ATM BNI",
    mb: "M-BNI",
    klik: "BNI Klik",
    ib: "Internet Banking",
    rek: "65162365515",
  },
];

export const dataBank3 = [
  {
    id: 3,
    name: "Mandiri",
    desc: "Mandiri Transfer",
    atm: "ATM Mandiri",
    mb: "M-Mandiri",
    klik: "Mandiri Klik",
    ib: "Internet Banking",
    rek: "76562662662",
  },
];

const getMethodsPayment = () => {
  const bank = localStorage.getItem("bank");
  let methodePayment2 = [];
  return (methodePayment2 = [
    {
      id: 1,
      text: [
        "Masukkan kartu ATM, lalu PIN",
        `Pilih menu “Transaksi Lainnya” – “Transfer” – “Ke Rek ${bank} Virtual Account”`,
        "Masukkan nomor Virtual Account: 70020+Order ID",
        "Contoh:",
        "Order ID: 12345678, maka ditulis 7002012345678",
        "Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi",
        "Ambil dan simpanlah bukti transaksi tersebut",
      ],
    },
    {
      id: 2,
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?",
      ],
    },
    {
      id: 3,
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.",
      ],
    },
    {
      id: 4,
      text: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vero.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, suscipit?",
      ],
    },
  ]);
};

export default getMethodsPayment;
