import React, { useState } from 'react'
import {
  CButton,
  CTable,
  CBadge,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCard,
  CCardHeader,
  CCardBody,
  CNavbar,
  CContainer,
  CForm,
  CFormInput,
} from '@coreui/react'

const Dashboard = () => {
  const [visible, setVisible] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: 'Detail Data',
    content: 'Tidak ada detail yang tersedia untuk tampilan ini.',
  })

  const columns = [
    { key: 'no', label: 'No', _props: { scope: 'col', color: 'info' } },
    { key: 'judul', label: 'Judul', _props: { scope: 'col', color: 'info' } },
    { key: 'tanggal', label: 'Tanggal', _props: { scope: 'col', color: 'info' } },
    { key: 'statusTa', label: 'Status', _props: { scope: 'col', color: 'info' } },
    { key: 'aksi', label: 'Aksi', _props: { scope: 'col', color: 'info' } },
  ]

  const data = [
    {
      no: 1,
      judul: 'Analisis Performa Protokol Jaringan Ad-Hoc menggunakan Simulasi NS-3',
      tanggal: '07/26/2024',
      status: 'Ditolak',
    },
    {
      no: 2,
      judul: 'Penerapan Teknologi Augmented Reality dalam Edukasi Virtual',
      tanggal: '08/26/2024',
      status: 'Disetujui',
    },
    {
      no: 3,
      judul: 'Desain dan Implementasi Sistem Pendeteksi Kebisingan pada Citra Digital',
      tanggal: '09/26/2024',
      status: 'Menunggu',
    },
  ]

  const handleModal = (status) => {
    setVisible(true)
    setModalContent(getModalContent(status))
  }

  const getModalContent = (status) => {
    const contentMap = {
      Disetujui: {
        title: 'Berkas Disetujui',
        content: (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              rowGap: '0.2rem',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>Nama Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: John Doe</p>
            <p style={{ fontWeight: 'bold' }}>Jenis Kelamin</p>
            <p style={{ paddingLeft: '1em' }}>: Laki-laki</p>
            <p style={{ fontWeight: 'bold' }}>Nomor Induk Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: 123456789</p>
            <p style={{ fontWeight: 'bold' }}>Angkatan</p>
            <p style={{ paddingLeft: '1em' }}>: 2020</p>
            <p style={{ fontWeight: 'bold' }}>Email Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: john.doe@example.com</p>
            <p style={{ fontWeight: 'bold' }}>Judul Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Lorem Ipsum</p>
            <p style={{ fontWeight: 'bold' }}>Kategori Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Kategori A</p>
            <p style={{ fontWeight: 'bold' }}>Jenis Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Jenis A</p>
            <p style={{ fontWeight: 'bold' }}>Dosen Pembimbing 1</p>
            <p style={{ paddingLeft: '1em' }}>: Jane Smith</p>
            <p style={{ fontWeight: 'bold' }}>Dosen Pembimbing 2</p>
            <p style={{ paddingLeft: '1em' }}>: Michael Johnson</p>
            <p style={{ fontWeight: 'bold' }}>Dosen Penguji 1</p>
            <p style={{ paddingLeft: '1em' }}>: Jane Smith</p>
            <p style={{ fontWeight: 'bold' }}>Dosen Penguji 2</p>
            <p style={{ paddingLeft: '1em' }}>: Michael Johnson</p>
          </div>
        ),
      },
      Ditolak: {
        title: 'Berkas Ditolak',
        content: (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              rowGap: '0.2rem',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>Nama Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: John Doe</p>
            <p style={{ fontWeight: 'bold' }}>Jenis Kelamin</p>
            <p style={{ paddingLeft: '1em' }}>: Laki-laki</p>
            <p style={{ fontWeight: 'bold' }}>Nomor Induk Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: 123456789</p>
            <p style={{ fontWeight: 'bold' }}>Angkatan</p>
            <p style={{ paddingLeft: '1em' }}>: 2020</p>
            <p style={{ fontWeight: 'bold' }}>Email Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: john.doe@example.com</p>
            <p style={{ fontWeight: 'bold' }}>Judul Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Lorem Ipsum</p>
            <p style={{ fontWeight: 'bold' }}>Kategori Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Kategori A</p>
            <p style={{ fontWeight: 'bold' }}>Jenis Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Jenis A</p>
            <p style={{ fontWeight: 'bold' }}>Dosen Pembimbing 1</p>
            <p style={{ paddingLeft: '1em' }}>: Jane Smith</p>
            <p style={{ fontWeight: 'bold' }}>Dosen Pembimbing 2</p>
            <p style={{ paddingLeft: '1em' }}>: Michael Johnson</p>
            <p style={{ fontWeight: 'bold' }}>Berkas </p>
            <p style={{ paddingLeft: '1em' }}>
              <a href="#">: Download Berkas</a>
            </p>
            <p style={{ fontWeight: 'bold' }}>Catatan untuk Mahasiswa </p>
            <p style={{ paddingLeft: '1em' }}>
              : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ),
      },
      Menunggu: {
        title: 'Berkas Menunggu',
        content: (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              rowGap: '0.2rem',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>Nama Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: John Doe</p>
            <p style={{ fontWeight: 'bold' }}>Jenis Kelamin</p>
            <p style={{ paddingLeft: '1em' }}>: Laki-laki</p>
            <p style={{ fontWeight: 'bold' }}>Nomor Induk Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: 123456789</p>
            <p style={{ fontWeight: 'bold' }}>Angkatan</p>
            <p style={{ paddingLeft: '1em' }}>: 2020</p>
            <p style={{ fontWeight: 'bold' }}>Email Mahasiswa</p>
            <p style={{ paddingLeft: '1em' }}>: john.doe@example.com</p>
            <p style={{ fontWeight: 'bold' }}>Judul Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Lorem Ipsum</p>
            <p style={{ fontWeight: 'bold' }}>Kategori Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Kategori A</p>
            <p style={{ fontWeight: 'bold' }}>Jenis Tugas Akhir</p>
            <p style={{ paddingLeft: '1em' }}>: Jenis A</p>
          </div>
        ),
      },
    }
    return (
      contentMap[status] || {
        title: 'Detail Data',
        content: 'Tidak ada detail yang tersedia untuk tampilan ini.',
      }
    )
  }

  return (
    <>
      <CCard>
        <CCardHeader as="h5">Status Pendaftaran</CCardHeader>
        <CCardBody>
          <CNavbar>
            <CContainer fluid style={{ paddingLeft: '60px', paddingBottom: '15px' }}>
              <CForm className="d-flex">
                <CFormInput type="search" className="me-2" placeholder="Judul" />
                <CButton type="submit" color="success" variant="outline">
                  Search
                </CButton>
              </CForm>
            </CContainer>
          </CNavbar>
          <CTable>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} {...column._props}>
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.no}</td>
                  <td>{item.judul}</td>
                  <td>{item.tanggal}</td>
                  <td>
                    <CBadge
                      shape="rounded-pill"
                      className="mt-2"
                      style={{
                        backgroundColor: getStatusColor(item.status).backgroundColor,
                        color: getStatusColor(item.status).fontColor,
                        padding: '7px',
                      }}
                    >
                      {item.status}
                    </CBadge>
                  </td>
                  <td>
                    <CButton
                      color="secondary"
                      size="sm"
                      shape="rounded-pill"
                      onClick={() => handleModal(item.status)}
                    >
                      Detail
                    </CButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </CTable>
          <CModal
            scrollable
            size="lg"
            visible={visible}
            onClose={() => setVisible(false)}
            aria-labelledby="ScrollingLongContentExampleLabel"
          >
            <CModalHeader
              className={
                modalContent.title === 'Berkas Disetujui'
                  ? 'bg-success text-white'
                  : modalContent.title === 'Berkas Ditolak'
                    ? 'bg-danger text-white'
                    : modalContent.title === 'Berkas Menunggu'
                      ? 'bg-warning text-white'
                      : ''
              }
            >
              <CModalTitle>{modalContent.title}</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <p>{modalContent.content}</p>
            </CModalBody>
            <CModalFooter>
              <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
              </CButton>
            </CModalFooter>
          </CModal>
        </CCardBody>
      </CCard>
    </>
  )
}

const getStatusColor = (status) => {
  switch (status) {
    case 'Disetujui':
      return { backgroundColor: 'rgba(111, 207, 151, 0.2)', fontColor: '#05C919' }
    case 'Ditolak':
      return { backgroundColor: 'rgba(174, 39, 39, 0.2)', fontColor: '#B72828' }
    case 'Menunggu':
      return { backgroundColor: 'rgba(225, 181, 46, 0.2)', fontColor: '#E1B52E' }
    default:
      return { backgroundColor: '', fontColor: '#FFFFFF' }
  }
}

export default Dashboard
