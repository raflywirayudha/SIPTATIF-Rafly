import React from 'react'

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CNavbar,
  CForm,
  CFormInput,
  CContainer,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const Dosen = () => {
  const columns = [
    {
      key: 'no',
      label: 'No',
      _props: { scope: 'col', color: 'info' },
    },
    {
      key: 'nidn',
      label: 'NIDN',
      _props: { scope: 'col', color: 'info' },
    },
    {
      key: 'namaDosen',
      label: 'Nama Dosen',
      _props: { scope: 'col', color: 'info' },
    },
    {
      key: 'jk',
      label: 'Jenis Kelamin',
      _props: { scope: 'col', color: 'info' },
    },
    {
      key: 'kuota',
      label: 'Kuota',
      _props: { scope: 'col', color: 'info' },
    },
    {
      key: 'aksi',
      label: 'Aksi',
      _props: { scope: 'col', color: 'info' },
    },
  ]
  const items = [
    {
      no: 1,
      nidn: '2914440384',
      namaDosen: 'Iwan Iskandar, S.T., M.T.',
      jk: 'Laki-laki',
      kuota: '6',
      aksi: (
        <CButton color="secondary" size="sm" shape="rounded-pill">
          {' '}
          Detail
        </CButton>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      no: 2,
      nidn: '4013449971',
      namaDosen: 'Reski Mai Candra, S.T., M.Sc.',
      jk: 'Laki-laki',
      kuota: '5',
      aksi: (
        <CButton color="secondary" size="sm" shape="rounded-pill">
          {' '}
          Detail
        </CButton>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      no: 3,
      nidn: '0376094284',
      namaDosen: 'Pizaini, S.T., M.Kom.',
      jk: 'Laki-laki',
      kuota: '4',
      aksi: (
        <CButton color="secondary" size="sm" shape="rounded-pill">
          {' '}
          Detail
        </CButton>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      no: 4,
      nidn: '4562457704',
      namaDosen: 'Iis Afrianty, S.T., M.Sc.',
      jk: 'Perempuan',
      kuota: '6',
      aksi: (
        <CButton color="secondary" size="sm" shape="rounded-pill">
          {' '}
          Detail
        </CButton>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
    {
      no: 5,
      nidn: '1794000537',
      namaDosen: 'Dr. Elin Haerani, S.T., M.Kom.',
      jk: 'Perempuan',
      kuota: '7',
      aksi: (
        <CButton color="secondary" size="sm" shape="rounded-pill">
          {' '}
          Detail
        </CButton>
      ),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <CCard>
      <CCardHeader as="h5">Dosen Pembimbing</CCardHeader>

      <CCardBody>
        <CNavbar>
          <CContainer fluid style={{ paddingLeft: '60px', paddingBottom: '15px' }}>
            <CForm className="d-flex">
              <CFormInput type="search" className="me-2" placeholder="Nama Dosen" />
              <CButton type="submit" color="success" variant="outline">
                Search
              </CButton>
            </CForm>
          </CContainer>
        </CNavbar>
        <CTable columns={columns} items={items} />
        <CPagination align="end" size="sm" aria-label="Page navigation example">
          <CPaginationItem>Previous</CPaginationItem>
          <CPaginationItem>1</CPaginationItem>
          <CPaginationItem>2</CPaginationItem>
          <CPaginationItem>3</CPaginationItem>
          <CPaginationItem>Next</CPaginationItem>
        </CPagination>
      </CCardBody>
    </CCard>
  )
}

export default Dosen
