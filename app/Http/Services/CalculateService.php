<?php

namespace App\Http\Services;

use App\Models\Country;
use App\Models\Product;
use App\Models\Tax;
use Illuminate\Validation\ValidationException;

class CalculateService
{
    public function __construct()
    {
    }

    /**
     * @throws ValidationException
     */
    public function getTotal($tax, $cart): array
    {
        try {
            $sum = Product::whereIn('id', collect($cart)->map(fn($x) => $x['id'])->values()->toArray())
                ->sum('price');

            $taxFormat = strtoupper(substr($tax, 0, 2));

            $taxPercent = Country::where('slug', $taxFormat)->first()
                ->tax->tax;

            $taxSum = ($sum/100) * $taxPercent;

            return [
                'taxSum' => round($taxSum, 2),
                'totalSum' => $taxSum + $sum,
                'taxPercent' => $taxPercent,
                'sum' => $sum,
            ];
        } catch (\Exception $e) {
            throw \Illuminate\Validation\ValidationException::withMessages([
                'error' => [$e->getMessage()],
            ]);
        }

    }


}
