<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $taxes = [
            'GR' => 24,
            'IT' => 22,
            'DE' => 19,
        ];

        foreach (\App\Models\Country::all() as $country) {
            DB::table('taxes')->insert([
                'country_id' => $country->id,
                'tax' => $taxes[$country->slug],
            ]);
        }
    }
}
