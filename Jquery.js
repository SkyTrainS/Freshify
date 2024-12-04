$(document).ready(function() { 
    // 1. Menambahkan tugas baru 
    $("#tambahTugas").click(function() { 
      var tugasBaru = $("<li></li>").text("Belajar jQuery"); 
      $("#tugasList").append(tugasBaru); // Menambahkan tugas baru ke dalam 
  daftar 
    }); 
   
    // 2. Mengubah teks judul 
    $("#ubahJudul").click(function() { 
      $("h2").text("Daftar Tugas Terbaru"); 
    }); 
   
    // 3. Menghapus tugas tertentu (tugas "Belajar CSS") 
    $("#hapusTugas").click(function() { 
      $("#tugasList li:contains('Belajar CSS')").remove(); // Menghapus tugas 
  "Belajar CSS" 
    }); 
   
    // 4. Menambahkan tombol dinamis 
    var tombol = $("<button></button>") 
      .text("Tugas Baru!") 
      .attr("id", "tugasBaru") 
      .addClass("btn") 
      .click(function() { 
        alert("Tugas Baru Diklik!"); 
      }); 
   
    // Menambahkan tombol baru di bawah daftar tugas 
    $("#kontainer").append(tombol); 
     
    // 5. Menambahkan daftar tugas secara dinamis 
    var daftarTugas = $("<ul></ul>"); 
    daftarTugas.append("<li>Task A</li>"); 
  daftarTugas.append("<li>Task B</li>"); 
  daftarTugas.append("<li>Task C</li>"); 
  $("#kontainer").append(daftarTugas); // Menambahkan daftar tugas baru ke dalam kontainer 
  });