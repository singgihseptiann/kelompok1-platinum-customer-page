import React from 'react';
import '../../styles/payment.css';

function Payment() {
  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <div className="payment-header-container">
          <div className="payment-header">
            <i class="bi bi-arrow-left"></i>
            <p>Pembayaran</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="eclips-step">1</div>
              <p>Pilih Metode</p>
              <div className="line-step"></div>
            </div>
            <div className="step">
              <div className="eclips-step">2</div>
              <p>Bayar</p>
              <div className="line-step"></div>
            </div>
            <div className="step">
              <div className="eclips-step">3</div>
              <p>Tiket</p>
            </div>
          </div>
        </div>

        <div className="payment-detail">
          <p>Detail Pesananmu</p>
          <div>
            <div>
              <p className="detail-header">Nama/Tipe Mobil</p>
              <p className="detail-">Innova</p>
            </div>
            <div>
              <p className="detail-header">Kategori</p>
              <p className="detail-">6-8 orang</p>
            </div>
            <div>
              <p className="detail-header">Tanggal Mulai Sewa</p>
              <p className="detail-">2 Juni 2022</p>
            </div>
            <div>
              <p className="detail-header">Tanggal Akhir Sewa</p>
              <p className="detail-">8 Juni 2022</p>
            </div>
          </div>
        </div>

        <div className="pembayaran-wrapper">
          <div className="pilihan-bank-container">
            <h6>Pilih Bank Transfer</h6>
            <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
            <div>
              <div className="bank-wrapper">
                <div className="bank-container">BCA</div>
                <p>BCA Transfer</p>
              </div>
              <div className="bank-wrapper">
                <div className="bank-container">BNI</div>
                <p>BNI Transfer</p>
              </div>
              <div className="bank-wrapper">
                <div className="bank-container">Mandiri</div>
                <p>Mandiri Transfer</p>
              </div>
            </div>
          </div>

          <div className="detail-container">
            <p className="detail-bold">Innova</p>
            <div className="detail-kapasitas">
              <i class="bi bi-people"></i>
              <p>6 - 8 orang</p>
            </div>
            <div className="total-container">
              <div>
                <p className="detail-thin">Total</p>
                <i class="bi bi-chevron-up"></i>
              </div>
              <p className="detail-bold">Rp 3.500.000</p>
            </div>
            <div className="detail-pembelian-container">
              <p className="detail-bold">Harga</p>
              <ul>
                <li>
                  <div className="list-flex">
                    <p className="detail-thin">Sewa Mobil Rp.500.000 x 7 Hari</p>
                    <p className="detail-thin">Rp 3.500.000</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="detail-pembelian-container">
              <p className="detail-bold">Biaya Lainnya</p>
              <ul>
                <li>
                  <div className="list-flex">
                    <p className="detail-thin">Pajak</p>
                    <p className="termasuk">Termasuk</p>
                  </div>
                </li>
                <li>
                  <div className="list-flex">
                    <p className="detail-thin">Biaya Makan Supir</p>
                    <p className="termasuk">Termasuk</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="detail-pembelian-container">
              <p className="detail-bold">Belum Termasuk</p>
              <ul>
                <li>
                  <div className="list-flex">
                    <p className="detail-thin">Bensin</p>
                  </div>
                </li>
                <li>
                  <div className="list-flex">
                    <p className="detail-thin">Tol dan Parkir</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="detail-border-bottom"></div>

            <div className="total-akhir-container">
              <p className="detail-bold">Harga</p>
              <p className="detail-bold">Rp 3.500.000</p>
            </div>

            <button>Bayar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
