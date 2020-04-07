def sum_from_line(file)
    nums = File 
        .readlines(file)
        .select { |line| line[0] != "#" }
        .map(&:to_i)

    nums.inject(:+)
end 

puts sum_from_line("myFile.md")


# You are given an array and a random number generator. Shuffle the array.

def my_shuffle(arr)
    new_arr = arr.dup
    arr.each_index do |idx|
        rand_idx = idx + rand(arr.length - idx)
        new_arr[idx], new_arr[rand_idx] = new_arr[rand_idx], new_arr[idx]
    end 
    new_arr
end 

puts my_shuffle([1,2,3])