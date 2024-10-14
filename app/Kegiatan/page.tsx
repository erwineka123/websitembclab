import Kegiatan from "@/app/components/Kegiatan/Kegiatan";

// Example destinations array
const destinations = [
  {
    destination: 'Study Group',
    image: '/image/kosong.png',
    description: 'Study group adalah kelompok belajar yang terdiri dari beberapa orang yang belajar bersama untuk mencapai tujuan belajar yang sama. Kelompok belajar ini dapat dibentuk oleh siswa sendiri atau diorganisir oleh guru sebagai bagian dari manajemen kelas. Tujuan dari study group adalah untuk meningkatkan pemahaman siswa terkait materi pelajaran dan memudahkan dalam proses pembelajaran. Study group dapat membantu siswa dalam mempelajari materi pelajaran dengan lebih teliti dan terlibat secara langsung dengan materi pelajaran.'
  },
  {
    destination: 'Tokyo',
    image: '/image/kosong.png',
    description: 'Experience the bustling streets of Tokyo!'
  },
  {
    destination: 'Paris',
    image: '/image/kosong.png',
    description: 'Explore the romantic city of Paris!'
  },
  // Add more destinations as needed
];

export default function pageKegiatan() {
  return (
    <div>
      <Kegiatan destinations={destinations} />
    </div>
  );
}
