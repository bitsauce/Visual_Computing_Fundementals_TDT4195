#version 430 core

layout(location=0) in vec4 in_color;

layout(location=0) out vec4 out_fragColor;

void main()
{
    out_fragColor = in_color;
}
