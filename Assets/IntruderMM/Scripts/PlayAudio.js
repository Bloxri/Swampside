#pragma strict


var clips : AudioClip[];


function PlayCurrent()
{
	audio.PlayOneShot(audio.clip);
}

function Play(clip : AudioClip)
{
	audio.PlayOneShot(clip);
}

function PlayClip(index : int)
{

	audio.PlayOneShot(clips[index]);
}