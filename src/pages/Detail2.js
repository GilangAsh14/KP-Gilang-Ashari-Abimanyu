import React from 'react'
import FooterMain from '../components/FooterMain'
import NavbarBig from '../components/NavbarBig'

function Detail2() {
    return (
        <div>
            <NavbarBig />
            <div style={{ marginLeft: 50, marginLeft: 50, padding: 30 }}>
                <h2 style={{ fontFamily: 'poppins', color: '#1e66d4', textAlign: 'center' }}>Tak Ada Fasilitas, Atlet Panjat Tebing Lampura Latihan di Bandar Lampung </h2>
                <hr></hr>
                <center>
                    <img alt="thumbnail"
                        className='img-fluid img-thumbnail rounded'
                        src='https://gambar.lampung.co/2022/01/Atlet-Panjat-Tebing.jpg'
                        style={{ borderRadius: 10 }} />

                </center>
                <br></br>
                <u>17 Januari, 2022</u>
                <br></br>
                <br></br>
                <p style={{ textAlign: 'justify' }}> &emsp; &emsp; Jelang Pekan Olahraga Provinsi (Porprov) Lampung IX Tahun 2022 yang akan di gelar November mendatang tentunya menumbuhkan semangat para atlet seluruh cabang olahraga se-provinsi Lampung mempersiapkan diri untuk mengikuti perhelatan olahraga tersebut.Porprov Lampung merupakan pesta olahraga akbar yang diikuti oleh atlet Lampung dari seluruh Kabupaten/Kota dimana mempertandingkan multi kejuaraan olahraga yang diselenggarakan 4 tahun sekali.

Nantinya Porprov Lampung IX direncanakan Komite Olahraga Nasional Indonesia (KONI) Provinsi Lampung sebagai penyelenggaranya. Lampung Utara pun salah satu tim kontingen peserta dalam kegiatan tersebut. </p>
            </div>
            <FooterMain />
        </div>
    )
}

export default Detail2