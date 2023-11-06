<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CartRequest;
use App\Http\Services\CalculateService;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function __construct(public CalculateService $calc)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CartRequest $request): array
    {
        $tax = $request->input('tax');
        $cart = $request->input('cart');

        return $this->calc->getTotal($tax, $cart);
    }
}
