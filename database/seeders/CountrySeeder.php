<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countries = [
            [
                'name' => 'Греция',
                'slug' => 'GR',
            ],
            [
                'name' => 'Германия',
                'slug' => 'DE',
            ],
            [
                'name' => 'Италия',
                'slug' => 'IT',
            ],
        ];

        DB::table('countries')->insert($countries);
    }
}
