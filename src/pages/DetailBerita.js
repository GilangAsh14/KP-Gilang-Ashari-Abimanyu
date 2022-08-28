import React from 'react'
import FooterMain from '../components/FooterMain'
import NavbarBig from '../components/NavbarBig'

function DetailBerita() {
    return (
        <div>
            <NavbarBig />
            <div style={{ marginLeft: 50, marginLeft: 50, padding: 30 }}>
                <h2 style={{ fontFamily: 'poppins', color: '#1e66d4', textAlign: 'center' }}>Syarat Naik KRL Terbaru Wajib Booster? </h2>
                <hr></hr>
                <center>
                    <img alt="thumbnail"
                        className='img-fluid img-thumbnail rounded'
                        src='https://akcdn.detik.net.id/community/media/visual/2022/05/19/kapasitas-penumpang-krl-kini-jadi-80-persen-2_169.jpeg?w=700&q=90'
                        style={{ borderRadius: 10 }} />

                </center>
                <br></br>
                <u>Diterbitkan: 12 Juli 2022 20.00 WIB</u>
                <br></br>
                <br></br>
                <p style={{ textAlign: 'justify' }}> &emsp; &emsp;  Mulai 18 Juli 2022, kapasitas penumpang Commuter Line ditambah. Jika sebelumnya 60 persen kini menjadi 80 persen atau 130-135 penumpang per kereta.Pemerintah telah menerbitkan aturan perjalanan terbaru merespons kenaikan kasus COVID-19. Aturan-aturan perjalanan terbaru bakal mulai berlaku mulai 17 Juli 2022 mendatang.
Salah satu poin utama dalam aturan ini adalah penggunaan vaksin booster sebagai syarat perjalanan. Pelaku perjalanan yang belum booster diminta melakukan tes rapid antigen ataupun PCR.
Ketentuan dalam Surat Edaran Satgas COVID-19 Nomor 21 Tahun 2022 tentang Ketentuan Perjalanan Orang Dalam Negeri Pada Masa Pandemi COVID-19 menjelaskan perjalanan rutin dengan moda transportasi darat menggunakan kendaraan pribadi atau umum, dan kereta api dalam satu wilayah/kawasan aglomerasi perkotaan dikecualikan dari persyaratan perjalanan vaksin booster.
Meski begitu, PT KAI Commuter menyatakan pengguna kereta api Commuter Line tetap harus memperlihatkan sertifikat vaksinasi dengan menggunakan aplikasi PeduliLindungi saat masuk ke stasiun atau check-in lewat aplikasi PeduliLindungi. Bila tidak ingin menggunakan aplikasi PeduliLindungi, maka pengguna Commuter Line wajib memperlihatkan sertifikat vaksin minimal dosis pertama
Hal itu tertuang dalam Surat Edaran (SE) Kemenhub Nomor 72 tahun 2022 tentang Petunjuk Pelaksanaan Perjalanan Orang Dalam Negeri dengan Transportasi Perkeretaapian pada Masa Pandemi Covid-19 dijelaskan .
</p>
            </div>
            <FooterMain />
        </div>
    )
}

export default DetailBerita