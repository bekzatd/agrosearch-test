<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Наушники',
                'slug' => Str::slug('Наушники'),
                'price' => 100,
                'currency_id' => 1,
                'description' => fake()->text,
                'image_url' => 'https://www.kz.sony.ru/image/dd18cf93606d238305a733d336c45537?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
            ],
            [
                'name' => 'Чехол для телефона',
                'slug' => Str::slug('Чехол для телефона'),
                'price' => 20,
                'currency_id' => 1,
                'description' => fake()->text,
                'image_url' => 'https://www.mechta.kz/export/1cbitrix/import_files/0a/0af6668d-27fa-11ec-a23f-005056b6dbd7.jpeg',
            ],
        ];

        DB::table('products')->insert($products);
    }
}
