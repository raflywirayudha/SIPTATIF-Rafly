import React, { useState } from "react";
import {
  CForm,
  CFormInput,
  CCol,
  CFormSelect,
  CCard,
  CCardHeader,
  CCardBody,
  CFormLabel,
  CButton,
} from "@coreui/react";

const Pendaftaran = () => {
  return (
    <>
      <CCard>
        <CCardHeader as="h5">Form Pendaftaran</CCardHeader>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={12}>
              <CFormSelect id="inputJenisPendaftaran" label="Jenis Pendaftaran">
                <option>Pilih...</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol md={6}>
              <CFormInput
                type="namaMhs"
                id="inputNamaMhs"
                label="Nama Mahasiswa"
              />
            </CCol>
            <CCol md={3}>
              <CFormInput
                type="nim"
                id="inputNim"
                label="Nomor Induk Mahasiswa"
              />
            </CCol>
            <CCol md={3}>
              <CFormSelect id="inputAngkatan" label="Angkatan">
                <option>Pilih...</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
              </CFormSelect>
            </CCol>
            <CCol md={12}>
              <CFormInput
                type="email"
                id="inputEmail"
                label="Email Mahasiswa"
              />
            </CCol>
            <CCol md={12}>
              <CFormInput
                type="judulTa"
                id="inputJudulTa"
                label="Judul Tugas Akhir"
              />
            </CCol>
            <CCol md={12}>
              <CFormSelect id="inputKategoriTa" label="Kategori Tugas Akhir">
                <option>Pilih...</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol md={6}>
              <CFormSelect id="inputCalonDP" label="Calon Dosen Pembimbing 1">
                <option>Pilih...</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <CCol md={6}>
              <CFormSelect id="inputCalonDP" label="Calon Dosen Pembimbing 2">
                <option>Pilih...</option>
                <option>...</option>
              </CFormSelect>
            </CCol>
            <div className="mb-3">
              <CFormLabel htmlFor="formFile">Berkas</CFormLabel>
              <CFormInput type="file" id="formFile" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton color="secondary" className="me-md-2">
                Batal
              </CButton>
              <CButton color="primary">Kirim</CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Pendaftaran;
