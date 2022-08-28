import React from 'react'
import { Card, Row, Col, Button, Pagination } from "react-bootstrap";
import NavbarAdmin from './NavbarAdmin';
import { Trash, EyeSharp, PencilSharp, AddCircle } from 'react-ionicons'
import FooterMain from '../components/FooterMain'
import NavDropdown from 'react-bootstrap/NavDropdown';
function PostItem2() {
    let active = 1 - 5;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item href="PostItem2"key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    return (
        <div style={{ width: '100%', }}>
            <NavbarAdmin />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
            <Button variant="outline-primary" href="Post?" style={{ fontFamily: 'poppins', borderRadius: 20, paddingLeft: 40 }}>Semua Postingan</Button>
                <NavDropdown title="Kategori" id="navbarScrollingDropdown" style={{ marginRight: 10, marginLeft: 10 }}>
                    <NavDropdown.Item href="PostItem1" style={{ fontFamily: 'poppins' }}>
                                Politik
                            </NavDropdown.Item>
                            <NavDropdown.Item href="PostItem2" style={{ fontFamily: 'poppins' }}>
                                Olahraga
                            </NavDropdown.Item>
                    </NavDropdown>
                <div>
                    <AddCircle
                        color={'#0d6efd'}
                        title={''}
                        height="30px"
                        width="30px"
                        style={{ position: 'absolute', margin: 5, }}
                    />
                    <Button variant="outline-primary" href="Upload" style={{ fontFamily: 'poppins', borderRadius: 20, paddingLeft: 40 }}>Postingan Baru</Button>
                </div>
            </div>

            <div>
                <Card bg="white" style={{ margin: 40, border: 'none' }}>
                    <Row className='shadow' style={{ padding: 20, }}>
                    <img alt="thumbnail"
                            src='https://gambar.lampung.co/2022/01/Atlet-Panjat-Tebing.jpg'
                            style={{ borderRadius: 15, maxWidth: 200 }} />
                        <Col >
                            <h5>Tak Ada Fasilitas, Atlet Panjat Tebing Lampura Latihan di Bandar Lampung</h5>
                            <br></br>
                            <p>17 Januari, 2022</p>
                        </Col>
                        <Col xs={1}  >
                            <a href='edit'>
                                <PencilSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <br></br>
                            <a href='Detail2'>
                                <EyeSharp
                                    color={'#00000'}
                                    title={''}
                                    height="30px"
                                    width="30px"
                                />
                            </a>
                            <Trash
                                color={'#00000'}
                                title={''}
                                height="30px"
                                width="30px"
                            />
                        </Col>

                    </Row>
                </Card>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', }}>
                <Pagination style={{ marginBottom: 100 }}>{items}</Pagination>
                <br />
                <br></br>
            </div>
            {/* <FooterMain /> */}
        </div>
    )
}

export default PostItem2