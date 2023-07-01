<?php

namespace Rubix\ML\Tests\Clusterers\Seeders;

use Rubix\ML\Datasets\Generators\Blob;
use Rubix\ML\Clusterers\Seeders\Seeder;
use Rubix\ML\Kernels\Distance\Euclidean;
use Rubix\ML\Clusterers\Seeders\PlusPlus;
use Rubix\ML\Datasets\Generators\Agglomerate;
use PHPUnit\Framework\TestCase;

/**
 * @group Seeders
 * @covers \Rubix\ML\Clusterers\Seeders\PlusPlus
 */
class PlusPlusTest extends TestCase
{
    /**
     * @var \Rubix\ML\Datasets\Generators\Agglomerate
     */
    protected $generator;

    /**
     * @var \Rubix\ML\Clusterers\Seeders\PlusPlus
     */
    protected $seeder;

    /**
     * @before
     */
    protected function setUp() : void
    {
        $this->generator = new Agglomerate([
            'red' => new Blob([255, 0, 0], 30.0),
            'green' => new Blob([0, 128, 0], 10.0),
            'blue' => new Blob([0, 0, 255], 20.0),
        ], [3, 3, 4]);

        $this->seeder = new PlusPlus(new Euclidean());
    }

    /**
     * @test
     */
    public function build() : void
    {
        $this->assertInstanceOf(PlusPlus::class, $this->seeder);
        $this->assertInstanceOf(Seeder::class, $this->seeder);
    }

    /**
     * @test
     */
    public function seed() : void
    {
        $dataset = $this->generator->generate(100);

        $seeds = $this->seeder->seed($dataset, 3);

        $this->assertCount(3, $seeds);
    }
}
