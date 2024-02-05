<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->sentence(6, true),
            'link' => fake()->url(),
            'img' => 'https://m.media-amazon.com/images/I/51YBww9vY3L._AC_SX679_.jpg',
            'desc' => fake()->paragraph(1, true),
            'price' => '49,9€'
        ];
    }
}
