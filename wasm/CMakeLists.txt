cmake_minimum_required(VERSION 3.1)

project(solarSystem)

add_library(solarSystem SHARED src/solarSystem.cpp)

set_target_properties(solarSystem PROPERTIES LINKER_LANGUAGE C)
