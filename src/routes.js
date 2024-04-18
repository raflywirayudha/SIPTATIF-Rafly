import React from 'react'

const ProfilMahasiswa = React.lazy(() => import('./views/profilmahasiswa/ProfilMahasiswa'))
const FormPendaftaran = React.lazy(() => import('./views/pendaftaran/FormPendaftaran'))
const Status = React.lazy(() => import('./views/pendaftaran/Status'))
const Dosen = React.lazy(() => import('./views/dosen/Dosen'))

const routes = [
  { path: '/', exact: true, name: 'Home' },

  {
    path: '/profilmahasiswa',
    name: 'Profil Mahasiswa',
    element: ProfilMahasiswa,
  },
  {
    path: '/formpendaftaran',
    name: 'Form Pendaftaran',
    element: FormPendaftaran,
  },
  { path: '/status', name: 'Status', element: Status },
  { path: '/dosen', name: 'Dosen', element: Dosen },
]

export default routes
