<?php
    echo '<?xml version="1.0" encoding="UTF-8"?>';
?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://www.putraabaditenda.com</loc>
        <lastmod>2024-02-09</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>

    <url>
        <loc>https://putraabaditenda.com/tentang-kami</loc>
        <lastmod>2024-02-09</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>

    <url>
        <loc>https://putraabaditenda.com/produk</loc>
        <lastmod>2024-02-09</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
    
    @foreach ($products as $product)
        <url>
            <loc>https://putraabaditenda.com/produk/{{ $product->slug }}</loc>
            <lastmod>{{ $product->updated_at->tz('UTC')->toAtomString() }}</lastmod>
            <changefreq>daily</changefreq>
            <priority>0.6</priority>
        </url>
    @endforeach

    <url>
        <loc>https://putraabaditenda.com/kontak</loc>
        <lastmod>2024-02-09</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.8</priority>
    </url>
</urlset>