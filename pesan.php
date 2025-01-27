<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Mengambil data dari formulir
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Mengatur alamat email tujuan
    $to = "jannnakbar.23@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "Pesan Baru dari Formulir Kontak";
    $body = "Nama: $name\nEmail: $email\nPesan:\n$message";
    $headers = "From: $email";

    // Mengirim email
    if (mail($to, $subject, $body, $headers)) {
        echo "Pesan Anda telah dikirim!";
    } else {
        echo "Terjadi kesalahan saat mengirim pesan.";
    }
} else {
    echo "Metode permintaan tidak valid.";
}
?>