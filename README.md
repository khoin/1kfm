1k FM
=====

## What is this?
This is a 1kilobyte FM (PM) synthesizer that runs in your web browser. You can check out the commented source in uncompressed.html. This is a step further from [2048fm](https://github.com/khoin/2048fm) which has a somewhat better interface.

## Features

* 6 Operators
* ADS (Attack, Decay, Sustain) Envelope
* Theoretical 34-voice polyphony (on my computer, no keyboard events fired after holding down 6 keys)
* Matrix modulation indexes
* Saving and loading patches
* Almost 3 octave keyboard range (`C` to `.` for lower octave; `Q` to `\` for upper octaves)


## Caveats

* Operators must be in order. That is, the program stops compute after it reaches an operator which have Output Volume of zero
* UI drag regions wraps at border.

## Example Patches

* [Saw Harpsichord](https://khoin.github.io/1kfm/#44,66,0,0,0,0,0,38,38,88,2,0,99,0,0,0,0,0,0,0,0,92,0,1,1,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NaN)
* [Drone](https://khoin.github.io/1kfm/#0,50,28,0,0,0,15,0,50,99,0,50,99,68,0,44,0,0,0,66,90,81,15,3,6,23,29,0,0,0,0,0,59,22,52,77,3,2,28,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NaN)
* [Lush Keys](https://khoin.github.io/1kfm/#8,12,0,22,0,0,0,0,99,44,1,0,40,0,23,0,12,0,0,0,19,21,48,4,2,62,26,23,29,0,0,0,16,23,99,10,2,0,42,0,2,0,29,0,0,30,27,99,19,3,1,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NaN)
* [Fifth Bass](https://khoin.github.io/1kfm/#99,0,37,0,0,0,0,14,16,46,1,0,83,0,99,39,0,0,0,0,15,17,44,1,50,84,0,0,0,0,0,0,0,0,99,0,3,0,28,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NaN)
* [Drunk Sine](https://khoin.github.io/1kfm/#21,99,99,99,99,99,6,0,99,99,2,0,99,0,0,0,0,0,0,0,0,99,0,0,6,3,0,24,0,27,0,0,0,0,99,27,0,5,8,0,0,23,0,0,47,0,0,99,46,0,2,1,0,0,0,0,0,0,0,0,99,0,0,1,2,0,0,0,0,0,0,0,0,99,0,0,3,3,NaN)
* [Rhythm Machine](https://khoin.github.io/1kfm/#99,0,0,0,0,0,0,0,83,62,0,4,99,0,80,0,0,0,0,0,0,73,95,0,1,99,58,95,64,78,0,0,0,0,67,69,0,2,91,99,0,0,36,0,0,0,0,99,99,0,50,99,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,NaN) (Best when played at `Q`)

## Acknowledgments

Like 2048fm

* Thanks [Werner](http://bpmdj.yellowcouch.org/) for showing me PM/FM synthesis
* [p01](https://github.com/p01) for such awesome 1k demos that inspired me.

## L

Public Domain.


